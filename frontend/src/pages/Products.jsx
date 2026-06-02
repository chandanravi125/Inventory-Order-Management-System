import { useEffect, useState } from "react";

import API from "../services/api";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function Products() {

  const [products, setProducts] =
    useState([]);

  const [editProduct,
    setEditProduct] =
    useState(null);

  const loadProducts = async () => {

    try {

      const response =
        await API.get("/products");

      setProducts(response.data);

    } catch (error) {

      console.log(error);

      alert(
        "Failed to load products"
      );

    }
  };

  useEffect(() => {

    loadProducts();

  }, []);

  return (
    <div>

      <h2>
        Product Management
      </h2>

      <ProductForm
        loadProducts={loadProducts}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
      />

      <ProductTable
        products={products}
        setEditProduct={setEditProduct}
        loadProducts={loadProducts}
      />

    </div>
  );
}

export default Products;