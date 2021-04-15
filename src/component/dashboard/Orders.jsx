import React, { useState, useEffect } from "react";
import axios from "axios";
import commafy from "commafy";
import * as utility from "../../utility.json";

const Orders = ({ user }) => {
  const { id } = user;
  const [myorders, setorders] = useState({ status: false, orders: [] });
  const url = `${process.env.REACT_APP_URL}/orders/myorders`;
  useEffect(() => {
    axios
      .post(url, { id })
      .then(({ data }) => {
        setorders({ status: true, orders: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url, id]);
  return (
    <>
      <div>
        <div>
          <div className="breadcrumb-holder">
            <div className="container-fluid">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="0#">Home</a>
                </li>
                <li className="breadcrumb-item active">My Orders </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-30px mb-30px">
        <div className="container">
          <div className="row">
            {!myorders.status ? (
              <>Fetching Your Orders.</>
            ) : myorders.orders.length === 0 ? (
              <div className="text-center alert alert-warning">
                You have no pending orders!!!
              </div>
            ) : (
              <div className="table-responsive">
                <table
                  className="table table-bordered table-hover"
                  style={{ textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>No of Items</th>
                      <th>Date</th>
                      <th>Total Payment</th>
                      <th>Status</th>
                      <th>Order Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myorders.orders.map((order, i) => (
                      <tr key={i + 1}>
                        <th>{i + 1}</th>
                        <th>{order.order.length}</th>
                        <th>{order.orderDate}</th>
                        <th>N{commafy(order.totalPrice)}</th>
                        <th>{order.paymentStatus}</th>
                        <td>{order.orderStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* or */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
