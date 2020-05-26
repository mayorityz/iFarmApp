import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderDetails from "./orderDetails";
import * as utility from "../../../utility.json";
import moment from "moment";
import commafy from "commafy";
import { Sugar } from "react-preloaders";
import { checkSession } from "../utility/session";

const Order = () => {
  checkSession();
  const [orders, setOrders] = useState([]);
  const [displayDetails, setDetails] = useState([]);
  const [loading, isLoaded] = useState(true);
  useEffect(() => {
    axios
      .get(`${utility.production.server}/orders/selectall`)
      .then(({ data }) => {
        console.log(data);
        if (data.length !== 0) {
          const d_ = data.filter((d) => {
            return d.orderStatus === "InComplete";
          });
          setOrders(d_);
        }
        isLoaded(false);
      })
      .catch((err) => {
        console.log(err);
        isLoaded(false);
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
      <Sugar customLoading={loading} />
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
              {orders.length === 0 ? (
                <>
                  <h2 className="text-center">You Have No New Orders</h2>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="../images/v.png" alt="img" />
                  </div>
                </>
              ) : (
                <>
                  <div className="alert alert-success text-center">
                    There are {orders.length} active order(s) today.
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
                          <td>
                            {moment(order.orderDate, "YYYYMMDD").fromNow()}
                          </td>
                          <td>{order.order.length}</td>
                          <td>&#8358;{commafy(order.totalPrice)}</td>
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
                </>
              )}
            </div>
            <div className="col-md-4">
              {displayDetails.length === 0 ? (
                <div className="centerContent">
                  <h4>Click On Order To See More Details</h4>
                </div>
              ) : (
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
