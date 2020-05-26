import React, { useState, useEffect } from "react";
import commafy from "commafy";
import axios from "axios";
import { Sugar } from "react-preloaders";
import InvestmentDetails from "./InvestmentDetails.jsx";
import * as Time from "moment";
import * as utility from "../../utility.json";

const Investment = ({ user }) => {
  const url = `${utility.production.server}/myinvestments/${user.id}`;
  const [isLoading, Loaded] = useState(true);
  const [data, setData] = useState(false);
  const [details, showDets] = useState([]);
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
  const convert = (timeString) =>
    Time(timeString).format("DD-MM-YY : h:mm:ss a");

  const showDetails = (id) => {
    let investment = data.filter((d) => {
      return d._id === id;
    });
    showDets(investment);
  };
  return (
    <>
      <Sugar customLoading={isLoading} />
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
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
              {details.length === 0 ? (
                <>
                  <h4>
                    Click "More Details" To See Your Investment Schedule Details
                  </h4>
                  <img src="../images/dashboard/new_product.png" alt="" />
                  <hr />
                </>
              ) : (
                <InvestmentDetails details={details} />
              )}
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <h4>My Investment Record.</h4>
                </div>
                <div className="card-body">
                  {!data ? (
                    <div>Fetching Your Data ...</div>
                  ) : (
                    <table className="table table-hover table-bordered table-responsive table-sm">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th scope="col">Investment Amount</th>
                          <th scope="col">Monthly Returns</th>
                          <th scope="col">Total Payout</th>
                          <th scope="col">Began</th>
                          <th scope="col">Completion</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((d, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>&#8358;{commafy(d.investmentAmt)}</td>
                            <td>&#8358;{commafy(d.monthlyReturn)}</td>
                            <td>&#8358;{commafy(d.expectedTotal)}</td>
                            <td>{convert(d.created)}</td>
                            <td>{convert(d.dueDate)}</td>
                            <td>{d.duration} months</td>
                            <td>
                              <button
                                onClick={() => {
                                  showDetails(d._id);
                                }}
                                className="btn btn-primary btn-xs"
                              >
                                More Details
                              </button>
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
