import API from "../services/api";

function CustomerTable({
  customers,
  loadCustomers,
}) {

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this customer?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/customers/${id}`
      );

      loadCustomers();

    } catch (error) {

      alert("Delete Failed");

    }
  };

  return (
    <div className="card">

      <h3>Customers List</h3>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {customers.map((customer) => (
            <tr key={customer.id}>

              <td>{customer.id}</td>

              <td>
                {customer.full_name}
              </td>

              <td>
                {customer.email}
              </td>

              <td>
                {customer.phone}
              </td>

              <td>

                <button
                  onClick={() =>
                    handleDelete(
                      customer.id
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

export default CustomerTable;