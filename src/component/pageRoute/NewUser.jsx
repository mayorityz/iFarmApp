import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as UTILITY from "../../utility.json";
import axios from "axios";

const NewAccount = () => {
  const url = `${UTILITY.servers.live}/newuser`;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [btnAction, setBtnAction] = useState(false);
  const [msg, setMsg] = useState("");
  let submitForm = (e) => {
    e.preventDefault();
    setMsg("please wait!!!");
    setBtnAction(true);
    if (pass1 !== pass2) {
      setBtnAction(false);
      setMsg("Password Mismatch");
      return;
    }

    axios
      .post(url, {
        firstName,
        lastName,
        email,
        pass1,
      })
      .then((response) => {
        const { success, errors } = response.data;
        if (success) {
          setMsg(
            "Account Created Successfully ... Check Your Email For A Link!"
          );
        } else {
          setBtnAction(false);
          errors.map((error) => {
            console.log(error);
            setMsg(error.msg);
            // display the errors
            return true;
          });
        }
      })
      .catch((err) => {
        setBtnAction(false);
        console.log(err);
      });
  };
  return (
    <section className="welcome-page register-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
      <div className="container">
        <div className="row welcome-text sec-padding flex-center">
          <div className="col-md-6 mb-50px">
            <img
              alt="img"
              src="images/customs/auth.png"
              className="ml-auto mr-auto"
            />
          </div>
          <div className="col-md-6">
            <h1>Sign Up</h1>
            <form id="log-in" className="mt-30px" onSubmit={submitForm}>
              <div className="form-group p-relative">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="d-inline-block w-100"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <i className="fa fa-user fs-20 color-blue p-absolute"></i>
              </div>
              <div className="form-group p-relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="d-inline-block w-100"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <i className="fa fa-user fs-20 color-blue p-absolute"></i>
              </div>
              <div className="form-group p-relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="d-inline-block w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className="fa fa-envelope fs-20 color-blue p-absolute"></i>
              </div>
              <div className="form-group p-relative">
                <input
                  type="password"
                  placeholder="Your Password"
                  required
                  className="d-inline-block w-100"
                  value={pass1}
                  onChange={(e) => setPass1(e.target.value)}
                />
                <i className="fa fa-lock fs-20 color-blue p-absolute"></i>
              </div>
              <div className="form-group p-relative">
                <input
                  type="password"
                  placeholder="Repeat Your Password"
                  required
                  className="d-inline-block w-100"
                  value={pass2}
                  onChange={(e) => setPass2(e.target.value)}
                />
                <i className="fa fa-lock fs-20 color-blue p-absolute"></i>
              </div>
              <div className="form-group mb-30px">
                <input
                  type="checkbox"
                  name="ma"
                  value="male"
                  className="w-auto h-auto"
                  required
                />{" "}
                I accept iFarm's <a href="#0">Terms of Use</a> and{" "}
                <a href="#0">Privacy Policy</a>.
              </div>
              {msg ? (
                <div className="alert alert-success" role="alert">
                  {msg}
                </div>
              ) : (
                ""
              )}
              {btnAction ? (
                <button className="main-btn btn-3 before-gray" disabled>
                  Sign Up
                </button>
              ) : (
                <button className="main-btn btn-3 before-gray">Sign Up </button>
              )}
            </form>
            <Link className="d-inline-block mt-20px" to="login">
              Already registered? Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="pattern p-absolute"></div>
    </section>
  );
};

export default NewAccount;
