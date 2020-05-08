import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Sugar } from "react-preloaders";
import axios from "axios";

const InvestmentDetails = () => {
  let { id } = useParams();
  const url = `https://ifarms-app.herokuapp.com/investment/${id}`;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setDetails(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div className="ui-section">
      <Sugar customLoading={loading} />
      <div className="alert alert-success">Welcome</div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Investment Description</div>
              <div className="card-body">
                <h5 className="card-title">
                  Investment Amount: {details.investmentAmt}
                </h5>
                <h5 className="card-title">
                  Investment Duration: {details.duration} Months
                </h5>
                <h5 className="card-title">
                  Expected Monthly Returns: {details.monthlyReturn}
                </h5>
                <h5 className="card-title">
                  Expected Total Payout: {details.expectedTotal}
                </h5>
                <h5 className="card-title">Start Date: {details.created}</h5>
                <hr />
                <h6>Payout History</h6>
                {!details.history ? (
                  <p>No History On This Investment Yet</p>
                ) : (
                  <p>No Payouts Yet!</p>
                )}
                <p className="card-text"></p>
                <Link to="#0" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
