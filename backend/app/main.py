from fastapi import FastAPI

from app.core.database import Base, engine
from app.routes.product_routes import router as product_router

from app.routes.customer_routes import router as customer_router

from app.routes.order_routes import router as order_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Inventory Management API")

app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)


@app.get("/")
def home():
    return {"message": "Inventory API Running"}