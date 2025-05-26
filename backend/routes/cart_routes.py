# cart_routes.py

from flask import Blueprint, request, jsonify
from models import db, CartItem, Product

cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/api/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()

    product_id = data.get('productId')
    quantity = data.get('quantity', 1)

    if not product_id:
        return jsonify({"error": "Missing productId"}), 400

    cart_item = CartItem(product_id=product_id, quantity=quantity)
    db.session.add(cart_item)
    db.session.commit()

    return jsonify({"message": "Item added to cart", "cartItem": {
        "id": cart_item.id,
        "productId": cart_item.product_id,
        "quantity": cart_item.quantity
    }}), 201

@cart_bp.route('/api/cart', methods=['GET'])
def get_cart_items():
    cart_items = CartItem.query.all()
    result = []

    for item in cart_items:
        product = Product.query.get(item.product_id)
        result.append({
            "id": item.id,
            "productId": item.product_id,
            "quantity": item.quantity,
            "productName": product.name if product else "Unknown",
            "price": product.price if product else 0,
            "image": product.image if product else None
        })

    return jsonify(result)
