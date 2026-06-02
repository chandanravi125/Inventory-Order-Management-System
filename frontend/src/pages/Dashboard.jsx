import { useEffect, useState } from "react";

import API from "../services/api";

function Dashboard() {

  const [products, setProducts] =
    useState([]);

  const [customers, setCustomers] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const productRes =
        await API.get("/products");

      const customerRes =
        await API.get("/customers");

      const orderRes =
        await API.get("/orders");

      setProducts(productRes.data);

      setCustomers(customerRes.data);

      setOrders(orderRes.data);

    } catch (error) {

      console.log(error);

    }
  };

  const lowStockProducts =
    products.filter(
      (product) => product.quantity < 5
    );

  return (
    <div>

      <h2>Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
        }}
      >

        <div className="card">
          <h3>Total Products</h3>

          <h2>
            {products.length}
          </h2>
        </div>

        <div className="card">
          <h3>Total Customers</h3>

          <h2>
            {customers.length}
          </h2>
        </div>

        <div className="card">
          <h3>Total Orders</h3>

          <h2>
            {orders.length}
          </h2>
        </div>

        <div className="card">
          <h3>Low Stock Products</h3>

          <h2>
            {lowStockProducts.length}
          </h2>
        </div>

      </div>

      <div
        className="card"
        style={{ marginTop: "20px" }}
      >

        <h3>
          Low Stock Product List
        </h3>

        {lowStockProducts.length === 0 ? (
          <p>
            No low stock products
          </p>
        ) : (

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>

              {lowStockProducts.map(
                (product) => (
                  <tr key={product.id}>
                    <td>
                      {product.name}
                    </td>

                    <td>
                      {product.sku}
                    </td>

                    <td>
                      {product.quantity}
                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default Dashboard;