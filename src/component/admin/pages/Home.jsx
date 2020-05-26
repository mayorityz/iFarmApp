import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sugar } from "react-preloaders";
import { FiUsers, FiTrendingUp, FiTruck } from "react-icons/fi";
import { checkSession } from "../utility/session";
const AdminHome = () => {
  checkSession();
  const [users, setUser] = useState(0);
  const [investment, setInvestments] = useState(0);
  const [loading, isLoading] = useState(true);
  const urls = [
    "https://ifarms-app.herokuapp.com/fetchallinvestment",
    "https://ifarms-app.herokuapp.com/allusers",
  ];

  useEffect(() => {
    async function getUser() {
      try {
        const inv_ = await axios.get(urls[0]);
        const users_ = await axios.get(urls[1]);
        setInvestments(inv_.data.length);
        setUser(users_.data.length);
        isLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [urls]);
  return (
    <div className="ui-section">
      <Sugar customLoading={loading} />
      <div className="routes">home - dashboard</div>
      <div className="dashboard_numbers">
        <div>
          <h5>
            Total Number Of Users:
            <FiUsers className="homeIcons" />
          </h5>
          <span>{users}</span>
        </div>
        <div>
          <h5> Total Number Of Investments:</h5>
          <FiTrendingUp className="homeIcons" /> <span>{investment}</span>
        </div>
        <div>
          <h4> New Orders:</h4> <FiTruck className="homeIcons" />{" "}
          <span>50</span>
        </div>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <section className="row">
          <div className="col-md-6">
            <h3>Send General E-Mail.</h3>
            <hr />
            <form action="" method="post">
              <textarea
                name=""
                id=""
                rows="10"
                className="form-control"
                placeholder="Type Your Message ..."
              ></textarea>
              <hr />
              <button className="btn btn-block btn-success btn-lg">
                Send To All
              </button>
            </form>
          </div>
          <div className="col-md-3">
            <h3>Blog Messages</h3>
            <hr />
            <div className="alert alert-warning">
              You have no blog content ...
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
