from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User

users_bp = Blueprint("users", __name__)

# routes/users.py

@users_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email    = data.get("email")
    password = data.get("password")
    fName    = data.get("fName")
    lName    = data.get("lName")

    # basic checks
    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 409

    # hash & save
    hashed = generate_password_hash(password)
    user = User(email=email, password=hashed, fName=fName, lName=lName)
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@users_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

