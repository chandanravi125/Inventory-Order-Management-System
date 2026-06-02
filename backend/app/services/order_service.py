from fastapi import HTTPException

from ..models.order import Order
from ..models.product import Product
from ..models.customer import Customer


def create_order(db, order_data):

    customer = (
        db.query(Customer)
        .filter(
            Customer.id == order_data.customer_id
        )
        .first()
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    product = (
        db.query(Product)
        .filter(
            Product.id == order_data.product_id
        )
        .first()
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # BUSINESS LOGIC

    if product.quantity < order_data.quantity:
        raise HTTPException(
            status_code=400,
            detail="Insufficient inventory"
        )

    total_amount = (
        product.price *
        order_data.quantity
    )

    product.quantity = (
        product.quantity -
        order_data.quantity
    )

    order = Order(
        customer_id=order_data.customer_id,
        product_id=order_data.product_id,
        quantity=order_data.quantity,
        total_amount=total_amount
    )

    db.add(order)

    db.commit()

    db.refresh(order)

    return order


def get_orders(db):
    return db.query(Order).all()


def get_order(db, order_id):

    order = (
        db.query(Order)
        .filter(Order.id == order_id)
        .first()
    )

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    return order


def delete_order(db, order_id):

    order = get_order(
        db,
        order_id
    )

    db.delete(order)
    db.commit()

    return {"message": "Deleted"}