import { useEffect, useState } from "react";

import API from "../services/api";

import OrderForm from "../components/OrderForm";
import OrderTable from "../components/OrderTable";

function Orders() {

  const [orders, setOrders] =
    useState([]);

  const loadOrders = async () => {

    try {

      const response =
        await API.get("/orders");

      setOrders(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div>

      <h2>
        Order Management
      </h2>

      <OrderForm
        loadOrders={loadOrders}
      />

      <OrderTable
        orders={orders}
        loadOrders={loadOrders}
      />

    </div>
  );
}

export default Orders;