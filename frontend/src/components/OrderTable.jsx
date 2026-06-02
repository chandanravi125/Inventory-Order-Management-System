import API from "../services/api";

function OrderTable({
  orders,
  loadOrders,
}) {

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete Order?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/orders/${id}`
      );

      loadOrders();

    } catch (error) {

      alert("Delete Failed");

    }
  };

  return (
    <div className="card">

      <h3>Orders List</h3>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (
            <tr key={order.id}>

              <td>{order.id}</td>

              <td>
                {order.customer_id}
              </td>

              <td>
                {order.product_id}
              </td>

              <td>
                {order.quantity}
              </td>

              <td>
                ₹{order.total_amount}
              </td>

              <td>

                <button
                  onClick={() =>
                    handleDelete(
                      order.id
                    )
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

export default OrderTable;