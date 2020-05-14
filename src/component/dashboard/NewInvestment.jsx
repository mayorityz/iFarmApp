import React, { useState, useEffect } from "react";
import commafy from "commafy";
import axios from "axios";

/**
 * rates - 2% for btw 100k n 1m
 * ------- 3% above 1m
 */

const NewInvestment = (props) => {
  const userID = props.user.id;
  const url = "http://localhost:8080/newinvestment";
  const [investmentAmt, setInvestment] = useState(100000);
  const [duration, setDuration] = useState(3);
  const [monthly, setMonthly] = useState("");
  const [total, setTotal] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    monthlyReturn(investmentAmt, duration);
  }, [investmentAmt, duration]);

  const monthlyReturn = (amount, duration) => {
    if (amount < 1000000) {
      // let m = Math.floor((0.02 / duration) * amount);

      let yearlyReturn = 0.02 * amount;
      let monthsReturn = Math.floor(
        yearlyReturn / duration + amount / duration
      );

      setMonthly(monthsReturn);
      setTotal(yearlyReturn);
    } else {
      let yearlyReturn = 0.03 * amount;
      let monthsReturn = Math.floor(
        yearlyReturn / duration + amount / duration
      );

      setMonthly(monthsReturn);
      setTotal(yearlyReturn);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (investmentAmt < 100000) {
      setMsg("Below Minimum Investment Amount");
    } else {
      setMsg("please wait!!!");
      axios
        .post(url, { investmentAmt, duration, monthly, total, userID })
        .then((response) => {
          window.location = response.data;
        })
        .catch((error) => {
          setMsg(error);
        });
    }
  };

  return (
    <>
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Create Investment </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-30px mb-30px" id="setBg">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="../images/dashboard/investment.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <h4>How we invest on iFarms.</h4>
                  <hr />
                  <ul>
                    <li>Reason one</li>
                    <li>Reason two</li>
                    <li>Reason two</li>
                    <li>Reason two</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4>Note:</h4>
                  <hr />
                  <ol>
                    <li>
                      Investments will be confirmed or rejected with 3 business
                      days.
                    </li>
                    <li>
                      If your investment is rejected, you will refunded
                      immediately with interests.
                    </li>
                    <li>
                      Minimum Investment is &#8358;100,000 & Maximum is
                      &#8358;15,000,000
                    </li>
                  </ol>
                  <h4>Rates</h4>
                  <hr />
                  <ul>
                    <li>
                      2% per month across board for amounts between N100,000 and
                      N1,000,000
                    </li>
                    <li>3% per month above &#8358;1,000,000</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <h4>Create A New Investment.</h4>
                </div>

                <div className="card-body">
                  <form onSubmit={submitForm}>
                    <div className="form-group">
                      <label>How much do you wish to invest?:</label>
                      <input
                        type="number"
                        name=""
                        className="form-control"
                        value={investmentAmt}
                        onChange={({ target }) => setInvestment(target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Period Of Time : </label>
                      <select
                        className="form-control custom-select"
                        onChange={({ target }) => setDuration(target.value)}
                        value={duration}
                      >
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="9">9 Months</option>
                        <option value="12">one year</option>
                        <option value="24">two year</option>
                      </select>
                    </div>
                    {monthly ? (
                      <div className="alert alert-success text-center">
                        Expected Monthly Returns = &#8358;{commafy(monthly)}
                      </div>
                    ) : (
                      ""
                    )}

                    {total ? (
                      <div className="alert alert-warning text-center">
                        Expected Total Returns = &#8358;
                        {commafy(total + parseFloat(investmentAmt))}
                      </div>
                    ) : (
                      ""
                    )}

                    {msg ? (
                      <div className="alert alert-warning text-center">
                        {msg}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="form-group">
                      <button className="btn btn-primary">Invest Now!</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewInvestment;
