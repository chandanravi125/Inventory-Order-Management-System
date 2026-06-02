import { useEffect, useState } from "react";

import API from "../services/api";

import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

function Customers() {

  const [customers, setCustomers] =
    useState([]);

  const loadCustomers = async () => {

    try {

      const response =
        await API.get("/customers");

      setCustomers(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div>

      <h2>
        Customer Management
      </h2>

      <CustomerForm
        loadCustomers={loadCustomers}
      />

      <CustomerTable
        customers={customers}
        loadCustomers={loadCustomers}
      />

    </div>
  );
}

export default Customers;