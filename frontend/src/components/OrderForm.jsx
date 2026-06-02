import { useEffect, useState } from "react";
import API from "../services/api";

function OrderForm({
  loadOrders,
}) {

  const [customers, setCustomers] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  const [formData, setFormData] =
    useState({
      customer_id: "",
      product_id: "",
      quantity: "",
    });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const customerRes =
        await API.get(
          "/customers"
        );

      const productRes =
        await API.get(
          "/products"
        );

      setCustomers(
        customerRes.data
      );

      setProducts(
        productRes.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/orders",
        formData
      );

      setFormData({
        customer_id: "",
        product_id: "",
        quantity: "",
      });

      loadOrders();

      alert("Order Created");

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Order Failed"
      );

    }
  };

  return (
    <div className="card">

      <h3>Create Order</h3>

      <form onSubmit={handleSubmit}>

        <select
          name="customer_id"
          value={formData.customer_id}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Customer
          </option>

          {customers.map((customer) => (
            <option
              key={customer.id}
              value={customer.id}
            >
              {customer.full_name}
            </option>
          ))}

        </select>

        <select
          name="product_id"
          value={formData.product_id}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Product
          </option>

          {products.map((product) => (
            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>
          ))}

        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Create Order
        </button>

      </form>

    </div>
  );
}

export default OrderForm;