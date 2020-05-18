import React from 'react';
import commafy from "commafy";
import * as TimeFormat from "moment";

const InvestmentDetails = ({details}) => {
    const convert = (timeString) =>
    TimeFormat(timeString).format("DD-MM-YY : h:mm:ss a");
    return ( <>
        <div className="container">
        <div className="row">
          <div className="">
            <div className="card">
              <div className="card-header">Investor Details.</div>
              <div className="card-body">
                {details[0].length === 0 ? null : (
                  <>
                    <h6 className="card-title">
                      Investor's Name: {details[0].investorDetails.firstName}{" "}
                      {details[0].investorDetails.lastName}.
                    </h6>
                    <h6 className="card-title">
                      Email Address : {details[0].investorDetails.email}.
                    </h6>
                    <h6 className="card-title">
                      Phone Number : {details[0].investorDetails.phone1}.
                    </h6>
                  </>
                )}
              </div>
            </div>
            <div className="card">
              <div className="card-header">Investment Description.</div>
              <div className="card-body">
                {details[0].length === 0 ? null : (
                  <>
                    <h6 className="card-title">
                      Investment Amount: ₦{commafy(details[0].investmentAmt)}.
                    </h6>
                    <h6 className="card-title">
                      Investment Duration: {details[0].duration} Months.
                    </h6>
                    <h6 className="card-title">
                      Expected Monthly Returns: ₦
                      {commafy(details[0].monthlyReturn)}.
                    </h6>
                    <h6 className="card-title">
                      Expected Total Payout: ₦{commafy(details[0].expectedTotal)}.
                    </h6>
                    <h6 className="card-title">
                      Start Date: {convert(details[0].created)}.
                    </h6>
                    <h6 className="card-title">
                      To Be Completed: {convert(details[0].dueDate)}.
                    </h6>
                    <hr />
                    <h6>Payout History</h6>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Due Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details[0].payoutSchedule.map((schedule, i) => (
                          <tr key={i}>
                            <td>{schedule.date}</td>
                            <td>
                              {schedule.status === "unpaid" ? (
                                <button className="btn btn-xs btn-warning">
                                  {schedule.status}
                                </button>
                              ) : (
                                <button className="btn btn-xs btn-success">
                                  paid
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
    </> );
}
 
export default InvestmentDetails;