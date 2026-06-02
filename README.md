# Inventory & Order Management System

## Technical Assessment - Software Engineer

## Project Overview

This project is a Production-Ready Containerized Inventory & Order Management System built using React, FastAPI, PostgreSQL, Docker, and Docker Compose.

The system enables businesses to manage:

* Products
* Customers
* Orders
* Inventory Tracking

The application follows a full-stack architecture and is fully containerized for deployment and scalability.

---

# Technology Stack

## Backend

* Python
* FastAPI
* SQLAlchemy
* PostgreSQL

## Frontend

* React JS
* Axios
* React Router DOM

## Database

* PostgreSQL

## DevOps

* Docker
* Docker Compose

## Version Control

* Git
* GitHub

---

# Project Structure

```text
inventory-management-system/

├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── routes/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── package.json
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env
│
├── docker-compose.yml
├── .env
└── README.md
```

---

# Features

## Product Management

### Supported Operations

* Create Product
* View Products
* View Product Details
* Update Product
* Delete Product

### Product Fields

* Product Name
* SKU / Product Code
* Price
* Quantity In Stock

---

## Customer Management

### Supported Operations

* Create Customer
* View Customers
* View Customer Details
* Delete Customer

### Customer Fields

* Full Name
* Email Address
* Phone Number

---

## Order Management

### Supported Operations

* Create Order
* View Orders
* View Order Details
* Delete Order

### Order Fields

* Customer Reference
* Product Reference
* Quantity Ordered
* Total Amount

---

# Business Logic Implementation

The application enforces the following business rules:

### Product Rules

* Product SKU must be unique.
* Product quantity cannot be negative.

### Customer Rules

* Customer email must be unique.

### Order Rules

* Orders cannot be created if stock is insufficient.
* Creating an order automatically reduces available inventory.
* Total amount is calculated automatically by the backend.

### Validation & Error Handling

* Request validation using Pydantic schemas.
* Proper HTTP status codes.
* Centralized error handling using FastAPI HTTPException.
* Input validation before processing requests.

---

# API Endpoints

## Product APIs

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /products      | Create Product    |
| GET    | /products      | Get All Products  |
| GET    | /products/{id} | Get Product By ID |
| PUT    | /products/{id} | Update Product    |
| DELETE | /products/{id} | Delete Product    |

---

## Customer APIs

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| POST   | /customers      | Create Customer    |
| GET    | /customers      | Get All Customers  |
| GET    | /customers/{id} | Get Customer By ID |
| DELETE | /customers/{id} | Delete Customer    |

---

## Order APIs

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| POST   | /orders      | Create Order    |
| GET    | /orders      | Get All Orders  |
| GET    | /orders/{id} | Get Order By ID |
| DELETE | /orders/{id} | Delete Order    |

---

# Frontend Features

## Dashboard

Displays:

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

## Product Management

* Add Product
* View Product List
* Update Product
* Delete Product

## Customer Management

* Add Customer
* View Customer List
* Delete Customer

## Order Management

* Create Order
* View Orders
* View Order Details
* Delete Order

---

# UI/UX Features

* Responsive Design
* Mobile Friendly Layout
* Clean User Interface
* Form Validation
* Error Handling Messages
* Success Notifications
* Organized Component Structure
* State Management using React Hooks

---

# Environment Variables

## Root .env

```env
POSTGRES_DB=inventory
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

## Backend .env

```env
DATABASE_URL=postgresql://postgres:postgres@db:5432/inventory
```

## Frontend .env

```env
REACT_APP_API_URL=http://localhost:8000
```

# Docker Setup

## Build and Run Entire Application

```bash
docker-compose up --build
```

Services:

* Frontend Service
* Backend Service
* PostgreSQL Service

---
---

# Deployment

## Backend Deployment
* Render

## Frontend Deployment
* Vercel


---

# Deliverables

The following deliverables are included:

* GitHub Repository
* Backend Source Code
* Frontend Source Code
* Docker Configuration
* Docker Compose Configuration
* API Documentation
* Deployment Configuration

---

# Future Improvements

* Authentication & Authorization
* JWT Security
* Role-Based Access Control
* Search & Filtering
* Pagination
* Audit Logs
* Export Reports
* Analytics Dashboard

---

