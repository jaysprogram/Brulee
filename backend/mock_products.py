from app import app
from models import db, Product

with app.app_context():
    # Clear products
    Product.query.delete()
    db.session.commit()

    db.create_all()  # Ensure tables exist

    # Check if products already exist
    if Product.query.count() == 0:
        sample_products = [
            Product(
                name="Elegant Chain Bracelet",
                price=199.99,
                description="A luxurious gold-plated chain bracelet, perfect for formal occasions or daily elegance.",
                image="jewelry-pic/chainBracelet.png"
            ),
            Product(
                name="White Flower Bracelet",
                price=299.99,
                description="Sparkling diamond bracelet to elevate any outfit.",
                image="jewelry-pic/whiteFlower.png"
            ),
            Product(
                name="Buterfly Ear Cuff",
                price=249.99,
                description="A cut but elegant butterfly.",
                image="jewelry-pic/earCuff.png"
            )
        ]

        db.session.bulk_save_objects(sample_products)
        db.session.commit()

        print(f"{len(sample_products)} products added successfully!")
    else:
        print("Products already exist in the database.")
