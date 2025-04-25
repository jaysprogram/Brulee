from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

## database model for storing user info
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(30), unique = True, nullable = False)
    password = db.Column(db.String(40), nullable = False)
    fName = db.Column(db.String(30), nullable = False)
    lName = db.Column(db.String(30), nullable = False)

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=True)
    image = db.Column(db.String(200), nullable=False) 
