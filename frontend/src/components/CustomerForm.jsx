import { useState } from "react";
import API from "../services/api";

function CustomerForm({ loadCustomers }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/customers",
        formData
      );

      setFormData({
        full_name: "",
        email: "",
        phone: "",
      });

      loadCustomers();

      alert("Customer Added");

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Error creating customer"
      );

    }
  };

  return (
    <div className="card">
      <h3>Add Customer</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;