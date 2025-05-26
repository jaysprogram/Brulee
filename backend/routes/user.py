# routes/user.py

import os
from functools import wraps
from flask import Blueprint, request, jsonify, g, abort
from models import db, UserProfile

# Clerk backend SDK
from clerk_backend_api import Clerk
from clerk_backend_api.jwks_helpers import (
    authenticate_request,
    AuthenticateRequestOptions,
)

# Initialize Clerk client
clerk = Clerk(bearer_auth=os.getenv("CLERK_SECRET_KEY"))

# Blueprint setup
user_bp = Blueprint("user", __name__, url_prefix="/user")


def require_authentication(fn):
    """
    Decorator to:
      1. Validate the incoming request’s Clerk session token.
      2. On success, populate g.clerk_user with the token payload.
      3. On failure, abort with 401 Unauthorized.
    """
    @wraps(fn)
    def wrapper(*args, **kwargs):
        # Authenticate the request
        auth_options = AuthenticateRequestOptions(
            authorized_parties=[os.getenv("CLERK_FRONTEND_API")]
        )
        req_state = clerk.authenticate_request(request, auth_options)

        if not req_state.is_signed_in:
            abort(401, description="Unauthorized: invalid or missing Clerk session")

        # Save the decoded JWT payload for handlers to use
        g.clerk_user = req_state.payload
        return fn(*args, **kwargs)

    return wrapper


# Apply authentication to all routes in this blueprint
@user_bp.before_request
@require_authentication
def _ensure_user():
    """No-op: the decorator does auth and sets g.clerk_user or aborts."""
    pass


@user_bp.route("/profile", methods=["GET"])
def get_profile():
    """
    Fetch the profile row for the signed-in user.
    If none exists, create it on the fly.
    """
    # Clerk user ID is in the JWT `sub` claim
    clerk_user_id = g.clerk_user.sub

    profile = UserProfile.query.filter_by(clerk_user_id=clerk_user_id).first()
    if not profile:
        profile = UserProfile(clerk_user_id=clerk_user_id)
        db.session.add(profile)
        db.session.commit()

    return jsonify({
        "clerk_user_id": clerk_user_id,
        "first_name":    profile.first_name  or g.clerk_user.first_name,
        "last_name":     profile.last_name   or g.clerk_user.last_name,
        "created_at":    profile.created_at.isoformat(),
        "updated_at":    profile.updated_at.isoformat(),
    }), 200


@user_bp.route("/profile", methods=["PUT"])
def update_profile():
    """
    Update only the locally-managed fields of the user profile.
    Does not touch Clerk’s email/password/etc.
    """
    data           = request.get_json() or {}
    clerk_user_id  = g.clerk_user.sub

    profile = UserProfile.query.filter_by(clerk_user_id=clerk_user_id).first()
    if not profile:
        profile = UserProfile(clerk_user_id=clerk_user_id)
        db.session.add(profile)

    # Overwrite with provided values, or keep existing
    profile.first_name = data.get("first_name", profile.first_name)
    profile.last_name  = data.get("last_name",  profile.last_name)

    db.session.commit()
    return jsonify({"message": "Profile updated"}), 200
