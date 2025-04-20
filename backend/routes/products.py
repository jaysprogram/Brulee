from flask import Blueprint, jsonify

products_bp = Blueprint("products", __name__)

@products_bp.route('/products', methods= ["GET"])
def getProducts():
    data = [
        {"id": 1, "name": "Gold Ring", "price": 120.0},
        {"id": 2, "name": "Silver Necklace", "price": 80.0}
    ]
    return jsonify(data)
