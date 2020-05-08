import React, { useState, useEffect } from "react";
import commafy from "commafy";
import axios from "axios";
import { Link } from "react-router-dom";
import { Sugar } from "react-preloaders";

const Investment = ({ user }) => {
  const url = `https://ifarms-app.herokuapp.com/myinvestments/${user.id}`;
  const [isLoading, Loaded] = useState(true);
  const [data, setData] = useState(false);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const userData = [...data];
        setData(userData);
        Loaded(false);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <>
      <Sugar customLoading={isLoading} />
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
              </li>
              <li className="breadcrumb-item active">My Investments </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-30px mb-30px">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="../images/dashboard/new_product.png" alt="" />
              <hr />
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <h4>Investment Record</h4>
                </div>
                <div className="card-body">
                  {!data ? (
                    <div>Fetching Your Data ...</div>
                  ) : (
                    <table className="table table-striped table-hover table-borderless table-responsive">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Investment Amt</th>
                          <th scope="col">Monthly Returns</th>
                          <th scope="col">Total Payout</th>
                          <th scope="col">Date Started</th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((d, i) => (
                          <tr key={i}>
                            <td>&#8358;{commafy(d.investmentAmt)}</td>
                            <td>&#8358;{commafy(d.monthlyReturn)}</td>
                            <td>&#8358;{commafy(d.expectedTotal)}</td>
                            <td>{d.created}</td>
                            <td>{d.dueDate}</td>
                            <td>{d.duration} months</td>
                            <td>
                              <Link to="" className="btn btn-primary btn-block">
                                More Details
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investment;
