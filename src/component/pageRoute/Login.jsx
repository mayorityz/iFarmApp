import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const url = "https://ifarms-app.herokuapp.com/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const loginForm = (e) => {
    e.preventDefault();
    setMsg("Please Wait !!!");
    axios
      .post(url, { email, password })
      .then((res) => {
        const { success, msg: message } = res.data;
        if (success) {
          setMsg("Successful Login");
          window.localStorage.setItem("iFarmVendor", message);
          window.location = "../dashboard";
        } else {
          setMsg(message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
      <div className="container">
        <div className="row welcome-text sec-padding flex-center">
          <div className="col-md-6 mb-50px">
            <img
              alt="img"
              src="images/customs/login.png"
              className="ml-auto mr-auto"
            />
          </div>
          <div className="col-md-6">
            <h1>Log in Now</h1>
            <p className="mb-50px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <form id="log-in" className="mt-30px mb-20px" onSubmit={loginForm}>
              <div className="form-group p-relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="d-block mb-20px"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                <i className="fa fa-envelope fs-20 color-blue p-absolute"></i>
              </div>
              <div className="form-group p-relative">
                <input
                  type="password"
                  placeholder="Your Password"
                  required
                  className="d-block mb-20px"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <i className="fa fa-lock fs-20 color-blue p-absolute"></i>
              </div>
              {msg ? (
                <div className="alert alert-warning text-center" role="alert">
                  {msg}
                </div>
              ) : (
                ""
              )}
              <button className="main-btn btn-3 before-gray">Log In</button>
            </form>
            <Link className="float-left mb-10px" to="newaccount">
              Not a member? Sign up
            </Link>
            <Link className="float-right" to="forgotpassword">
              Forgot my password
            </Link>
          </div>
        </div>
      </div>
      <div className="pattern p-absolute"></div>
    </section>
  );
};

export default Login;
