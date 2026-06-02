import { useState } from "react";
import API from "../services/api";

function ProductForm({
  loadProducts,
  editProduct,
  setEditProduct,
}) {
  const [formData, setFormData] = useState({
    name: editProduct?.name || "",
    sku: editProduct?.sku || "",
    price: editProduct?.price || "",
    quantity: editProduct?.quantity || "",
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
      if (editProduct) {
        await API.put(
          `/products/${editProduct.id}`,
          formData
        );

        setEditProduct(null);
      } else {
        await API.post(
          "/products",
          formData
        );
      }

      setFormData({
        name: "",
        sku: "",
        price: "",
        quantity: "",
      });

      loadProducts();

    } catch (error) {
      alert(
        error.response?.data?.detail ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="card">
      <h3>
        {editProduct
          ? "Update Product"
          : "Add Product"}
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          required
          disabled={editProduct}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editProduct
            ? "Update"
            : "Create"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;