from flask import Flask
from flask_cors import CORS
from models import db 

## ALL of the blueprints
from routes.products import products_bp
from routes.users import users_bp

app = Flask(__name__)
CORS(app)

## database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///brulee.db'
db.init_app(app)

# this will create all tables (if they don't exist) based on your models
with app.app_context():
    db.create_all()


app.register_blueprint(products_bp)
app.register_blueprint(users_bp)

@app.route("/")
def home():
    return {"message": "Flask is running..."}


if __name__ == "__main__" :
    app.run(debug=True,port=5000)