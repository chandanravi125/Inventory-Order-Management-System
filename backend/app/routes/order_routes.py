from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from ..core.database import get_db

from ..schemas.order import (
    OrderCreate
)

from ..services.order_service import (
    create_order,
    get_orders,
    get_order,
    delete_order
)

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)


@router.post("", status_code=201)
def create(
    order: OrderCreate,
    db: Session = Depends(get_db)
):
    return create_order(
        db,
        order
    )


@router.get("")
def get_all(
    db: Session = Depends(get_db)
):
    return get_orders(db)


@router.get("/{order_id}")
def get_one(
    order_id: int,
    db: Session = Depends(get_db)
):
    return get_order(
        db,
        order_id
    )


@router.delete("/{order_id}")
def remove(
    order_id: int,
    db: Session = Depends(get_db)
):
    return delete_order(
        db,
        order_id
    )