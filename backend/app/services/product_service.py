from fastapi import HTTPException
from ..models.product import Product


def create_product(db, product_data):

    existing = (
        db.query(Product)
        .filter(Product.sku == product_data.sku)
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="SKU already exists"
        )

    product = Product(
        name=product_data.name,
        sku=product_data.sku,
        price=product_data.price,
        quantity=product_data.quantity
    )

    db.add(product)
    db.commit()
    db.refresh(product)

    return product


def get_products(db):
    return db.query(Product).all()


def get_product(db, product_id):

    product = (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product


def delete_product(db, product_id):

    product = get_product(db, product_id)

    db.delete(product)
    db.commit()

    return {"message": "Deleted"}

def update_product(
    db,
    product_id,
    product_data
):

    product = get_product(
        db,
        product_id
    )

    product.name = product_data.name
    product.price = product_data.price
    product.quantity = product_data.quantity

    db.commit()
    db.refresh(product)

    return product