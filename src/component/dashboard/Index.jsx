import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
import axios from "axios";
import * as utility from "../../utility.json";

const Dashboard = ({ user }) => {
  const { id } = user;
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    productCount: 0,
    investmentCount: 0,
    pendingOrders: 0,
    totalPayments: 0,
    expectedReturns: 0,
    totalSales: 0,
  });
  const url = `${utility.production.server}/user/dashboard`;
  useEffect(() => {
    const res = async () => {
      axios
        .post(url, { id })
        .then((r) => {
          setResponse(r.data);
        })
        .catch((err) => console.log(err));
      setLoading(true);
    };
    res();
  }, [id, url]);

  return (
    <>
      <Sugar customLoading={loading} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
            <h1>Investments</h1>
            <hr />
            <div className="row">
              <div
                className="col-md-4 bg-primary text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="fa fa-area-chart"
                  style={{ fontSize: "55px" }}
                ></span>
                <h2 className="text-right">Active Investments</h2>
                <h5 className="text-right">{response.investmentCount}</h5>
              </div>
              <div
                className="col-md-4 bg-warning text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="	fa fa-dollar"
                  style={{ fontSize: "55px" }}
                ></span>
                <h2 className="text-right">Total Payouts</h2>
                <h5 className="text-right">{response.totalPayments}</h5>
              </div>
              <div
                className="col-md-4 bg-danger text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="	fa fa-pie-chart"
                  style={{ fontSize: "55px" }}
                ></span>
                <h2 className="text-right">Expected Returns</h2>
                <h5 className="text-right">N0</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
            <h1>My Products</h1>
            <hr />
            <div className="row">
              <div
                className="col-md-4 bg-warning text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="fa fa-bar-chart-o"
                  style={{ fontSize: "55px" }}
                ></span>
                <h2 className="text-right">Active Products</h2>
                <h5 className="text-right">{response.productCount}</h5>
              </div>
              <div
                className="col-md-4 bg-dark text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="	fa fa-bank"
                  style={{ fontSize: "55px" }}
                ></span>
                <h2 className="text-right">Total Sales</h2>
                <h5 className="text-right">N{response.totalSales}</h5>
              </div>
              <div
                className="col-md-4 bg-info text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="fa fa-th-list"
                  style={{ fontSize: "55px" }}
                ></span>
                <h2 className="text-right">Pending Order</h2>
                <h5 className="text-right">{response.pendingOrders}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
