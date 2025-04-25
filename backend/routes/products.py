from flask import Blueprint, jsonify
from models import db, Product

products_bp = Blueprint('products', __name__)

@products_bp.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = []
    for product in products:
        product_list.append({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "image": product.image
        })
    return jsonify(product_list)

