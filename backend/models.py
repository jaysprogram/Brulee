from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

## database model for storing user info
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(30), unique = True, nullable = False)
    password = db.Column(db.String(40), nullable = False)
    fName = db.Column(db.String(30), nullable = False)
    lName = db.Column(db.String(30), nullable = False)

