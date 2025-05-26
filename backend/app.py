from flask import Flask
from flask_cors import CORS
from models import db 

from routes.products import products_bp
from routes.users import users_bp
from routes.cart_routes import cart_bp 

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///brulee.db'
db.init_app(app)

with app.app_context():
    db.create_all()


app.register_blueprint(products_bp)
app.register_blueprint(users_bp)
app.register_blueprint(cart_bp)  

@app.route("/")
def home():
    return {"message": "Flask is running..."}


if __name__ == "__main__" :
    app.run(debug=True,port=5000)

