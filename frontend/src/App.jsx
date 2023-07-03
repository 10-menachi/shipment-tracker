import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customers";
import HomePage from "./components/HomePage";
import Orders from "./components/Orders";
import Shipments from "./components/Shipments";
import SideBar from "./components/SideBar";

const App = () => {
  const [shipments, setShipments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [displayPending, setDisplayPending] = useState(false)
  const [displayDelivered, setDisplayDelivered] = useState(false)
  const [displayCancelled, setDisplayCancelled] = useState(false)
  const [displayOrderPending, setDisplayOrderPending] = useState(false)
  const [displayOrderDelivered, setDisplayOrderDelivered] = useState(false)
  const [displayOrderCancelled, setDisplayOrderCancelled] = useState(false)

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await fetch("http://localhost:5000/shipments", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch shipments");
        }

        const data = await response.json();
        setShipments(data);
      } catch (error) {
        console.error("Error fetching shipments:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch shipments");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching or:", error);
      }
    };

    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:5000/customers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }

        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching or:", error);
      }
    };

    fetchShipments();
    fetchOrders();
    fetchCustomers();
  }, []);
  return (
    <>
      <SideBar
        displayPending={displayPending}
        displayDelivered={displayDelivered}
        displayCancelled={displayCancelled}
        displayOrderPending={displayOrderPending}
        displayOrderDelivered={displayOrderDelivered}
        displayOrderCancelled={displayOrderCancelled}
        setDisplayPending={setDisplayPending}
        setDisplayDelivered={setDisplayDelivered}
        setDisplayCancelled={setDisplayCancelled}
        setDisplayOrderPending={setDisplayOrderPending}
        setDisplayOrderDelivered={setDisplayOrderDelivered}
        setDisplayOrderCancelled={setDisplayOrderCancelled}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shipments" element={
          <Shipments
            shipments={shipments}
            displayPending={displayPending}
            displayDelivered={displayDelivered}
            displayCancelled={displayCancelled}
          />
        } />
        <Route path="/orders" element={
          <Orders
            orders={orders}
            displayOrderPending={displayOrderPending}
            displayOrderDelivered={displayOrderDelivered}
            displayOrderCancelled={displayOrderCancelled}

          />
        }
        />
        <Route path="/customers" element={<Customers customers={customers} />} />
        <Route path="/customers/add_customer" element={<AddCustomer />} />
      </Routes>
    </>
  );
};

export default App;
