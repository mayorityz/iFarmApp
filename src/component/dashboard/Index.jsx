import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
            <h1>Investments</h1>
            <hr />
            <div class="row">
              <div
                className="col-md-4 bg-primary text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="fa fa-area-chart"
                  style={{ "font-size": "55px" }}
                ></span>
                <h2 className="text-right">Active Investments</h2>
                <h5 className="text-right">12</h5>
              </div>
              <div
                className="col-md-4 bg-warning text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="	fa fa-dollar"
                  style={{ "font-size": "55px" }}
                ></span>
                <h2 className="text-right">Total Payouts</h2>
                <h5 className="text-right">12</h5>
              </div>
              <div
                className="col-md-4 bg-danger text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="	fa fa-pie-chart"
                  style={{ "font-size": "55px" }}
                ></span>
                <h2 className="text-right">Expected Returns</h2>
                <h5 className="text-right">12</h5>
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
            <div class="row">
              <div
                className="col-md-4 bg-warning text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="fa fa-bar-chart-o"
                  style={{ "font-size": "55px" }}
                ></span>
                <h2 className="text-right">Active Products</h2>
                <h5 className="text-right">12</h5>
              </div>
              <div
                className="col-md-4 bg-dark text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="	fa fa-bank"
                  style={{ "font-size": "55px" }}
                ></span>
                <h2 className="text-right">Total Sales</h2>
                <h5 className="text-right">12</h5>
              </div>
              <div
                className="col-md-4 bg-info text-white"
                style={{ padding: "20px" }}
              >
                <span
                  className="fa fa-th-list"
                  style={{ "font-size": "55px" }}
                ></span>
                <h2 className="text-right">Pending Order</h2>
                <h5 className="text-right">12</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
