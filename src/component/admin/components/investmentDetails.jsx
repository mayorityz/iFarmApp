import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Sugar } from "react-preloaders";
import * as TimeFormat from "moment";
import axios from "axios";
import commafy from "commafy";

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const convert = (timeString) =>
    TimeFormat(timeString).format("DD-MM-YY : h:mm:ss a");

  return (
    <div className="ui-section">
      <Sugar customLoading={loading} />
      <div className="alert alert-success">Investment Full Details.</div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Investor Details.</div>
              <div className="card-body">
                {details.length === 0 ? null : (
                  <>
                    <h5 className="card-title">
                      Investor's Name: {details.investorDetails.firstName}{" "}
                      {details.investorDetails.lastName}.
                    </h5>
                    <h5 className="card-title">
                      Email Address : {details.investorDetails.email}.
                    </h5>
                    <h5 className="card-title">
                      Phone Number : {details.investorDetails.phone1}.
                    </h5>
                  </>
                )}
              </div>
            </div>
            <div className="card">
              <div className="card-header">Investment Description.</div>
              <div className="card-body">
                {details.length === 0 ? null : (
                  <>
                    <h5 className="card-title">
                      Investment Amount: ₦{commafy(details.investmentAmt)}.
                    </h5>
                    <h5 className="card-title">
                      Investment Duration: {details.duration} Months.
                    </h5>
                    <h5 className="card-title">
                      Expected Monthly Returns: ₦
                      {commafy(details.monthlyReturn)}.
                    </h5>
                    <h5 className="card-title">
                      Expected Total Payout: ₦{commafy(details.expectedTotal)}.
                    </h5>
                    <h5 className="card-title">
                      Start Date: {convert(details.created)}.
                    </h5>
                    <h5 className="card-title">
                      To Be Completed: {convert(details.dueDate)}.
                    </h5>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
