from fastapi import HTTPException
from ..models.customer import Customer


def create_customer(db, customer_data):

    existing = (
        db.query(Customer)
        .filter(Customer.email == customer_data.email)
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    customer = Customer(
        full_name=customer_data.full_name,
        email=customer_data.email,
        phone=customer_data.phone
    )

    db.add(customer)
    db.commit()
    db.refresh(customer)

    return customer


def get_customers(db):
    return db.query(Customer).all()


def get_customer(db, customer_id):

    customer = (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return customer


def delete_customer(db, customer_id):

    customer = get_customer(
        db,
        customer_id
    )

    db.delete(customer)
    db.commit()

    return {"message": "Deleted"}