import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderDetails from "./orderDetails";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [displayDetails, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/orders/selectall")
      .then(({ data }) => {
        console.log(data);
        if (data.length !== 0) {
          const d_ = data.filter((d) => {
            return d.orderStatus === "InComplete";
          });
          setOrders(d_);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showDetails = (id) => {
    let O = orders.filter((order) => {
      return order.orderId === id;
    });
    console.log(O);
    setDetails(O);
  };

  return (
    <>
      <div className="ui-section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Customer Orders
            </li>
          </ol>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="alert alert-warning">
                You have {orders.length} orders
              </div>
              <table className="table table-hover table-stripped">
                <thead>
                  <tr>
                    <th>order id</th>
                    <th>Date</th>
                    <th>Number Of Items</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.order.length}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-xs"
                          onClick={() => {
                            showDetails(order.orderId);
                          }}
                        >
                          See Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              {displayDetails.length === 0 ? null : (
                <OrderDetails data={displayDetails} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
