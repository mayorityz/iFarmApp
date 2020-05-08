import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiUsers,
  FiSmartphone,
  FiTrash2,
  FiMail,
  FiUnlock,
  FiUserX,
} from "react-icons/fi";
import axios from "axios";

const AdminUsers = () => {
  const url = "https://ifarms-app.herokuapp.com/allusers";
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setLoading(false);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <Sugar customLoading={loading} />
      <div className="ui-section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Users
            </li>
          </ol>
        </nav>
        <div className="alert alert-warning text-center">
          You have {users.length} users on iFarms
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
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
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
              <table className="table table-hover table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      <FiUsers /> Name
                    </th>
                    <th scope="col">
                      <FiMail /> Email Address
                    </th>
                    <th scope="col">
                      <FiSmartphone /> Phone
                    </th>
                    <th scope="col">Actions</th>
                    <th scope="col">
                      <FiTrash2 />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.length ? (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <Link to="#">
                            <FiUser /> {user.firstName} {user.lastName}
                          </Link>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone1}</td>
                        <td>
                          <button className="btn btn-xs btn-primary">
                            <FiMail /> Send Email
                          </button>
                          <button className="btn btn-xs btn-warning">
                            <FiUnlock /> Reset Password
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-xs">
                            <FiUserX style={{ fontSize: "20px" }} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>You have no active users</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
