import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Sugar } from "react-preloaders";
import axios from "axios";
import * as moment from "moment";
import commafy from "commafy";

import { FiUser, FiUsers, FiSmartphone, FiMail } from "react-icons/fi";

const AdminInvestments = () => {
  let { path } = useRouteMatch();
  const url = "https://ifarms-app.herokuapp.com/fetchallinvestment";
  const [inv, setInv] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        let stuff = data.filter((d) => d.isConcluded === false);
        setInv(stuff);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div className="ui-section">
      <Sugar customLoading={loading} />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Investments
          </li>
        </ol>
      </nav>
      <div className="alert alert-warning text-center">
        You have {inv.length} Investments on iFarms
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-9">
            <form action="" method="post">
              <div className="col-auto">
                <label className="" htmlFor="inlineFormInputGroup">
                  Search For A User Account :
                </label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FiUsers />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="inlineFormInputGroup"
                    placeholder="Search By E-mail Address..."
                  />
                </div>
              </div>
            </form>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#0">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#0">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#0">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#0">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#o">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-4">
                <form action="" method="post">
                  <select name="" id="" className="form-control">
                    <option value="">---- Check Due Returns ----</option>
                    <option value="">Today</option>
                    <option value="">Tomorrow</option>
                    <option value="">Next Week</option>
                    <option value="">Next Month</option>
                  </select>
                </form>
              </div>
            </div>
            <hr />
            <table className="table table-hover table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    <FiUsers /> Name
                  </th>
                  <th scope="col">
                    <FiUsers /> Duration
                  </th>
                  <th scope="col">
                    <FiMail /> Amount Invested
                  </th>
                  <th scope="col">
                    <FiSmartphone /> Monthly Return
                  </th>
                  <th scope="col">
                    <FiSmartphone /> Date Started
                  </th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {inv.length
                  ? inv.map((inv_, i) => (
                      <tr key={i}>
                        <td>
                          <Link to="#">
                            <FiUser /> {inv_.investorDetails.firstName}{" "}
                            {inv_.investorDetails.lastName}
                          </Link>
                        </td>
                        <td>{inv_.duration} Months</td>
                        <td>N{commafy(inv_.investmentAmt)}</td>
                        <td>N{commafy(inv_.monthlyReturn)}</td>
                        <td>{moment(inv_.created, "YYYYMMDD").fromNow()}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-block btn-primary"
                            to={`${path}/${inv_._id}`}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInvestments;
