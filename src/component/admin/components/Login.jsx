import React, { useState } from "react";
import { newSession } from "./../utility/session";

const AdminLogin = () => {
  const defEmail = "ifarmadmin@i-farms.com";
  const defPass = "ifarms-app-123-@#";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    email === defEmail && password === defPass
      ? newSession()
      : alert("invalid cred");
  };

  return (
    <>
      <div>
        <form action="" className="adminloginform" onSubmit={login}>
          <h3 className="text-center">Admin Login</h3>
          <hr />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address .."
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password ..."
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </div>

          <button className="btn btn-block btn-success btn-lg">Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
