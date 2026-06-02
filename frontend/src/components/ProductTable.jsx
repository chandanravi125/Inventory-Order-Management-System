import API from "../services/api";

function ProductTable({
  products,
  setEditProduct,
  loadProducts,
}) {

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/products/${id}`
      );

      loadProducts();

    } catch (error) {

      alert("Delete failed");

    }
  };

  return (
    <div className="card">
      <h3>Products List</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>

              <td>

                <button
                  onClick={() =>
                    setEditProduct(product)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(product.id)
                  }
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;