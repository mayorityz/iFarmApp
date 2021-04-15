import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sugar } from "react-preloaders";

const MyAccount = ({ user }) => {
  const [loading, setLoaded] = useState(true);
  const [enable, disable] = useState(false);
  const [displayMsg, setDisplay] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [address, setAddress] = useState("");
  const [LGA, setLGA] = useState("");
  const [state, setState] = useState("");
  const [img, setImg] = useState("");
  const url = `${process.env.REACT_APP_URL}/${user.id}`;
  const updateUrl = `${process.env.REACT_APP_URL}/${user.id}`;
  const defaultImg = "../images/dashboard/user_512x512.png";
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhone1(data.phone1);
        setPhone2(data.phone2);
        setAddress(data.address);
        setLGA(data.LGA);
        setState(data.State);
        data.profileImg ? setImg(data.profileImg) : setImg(defaultImg);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const updateProfile = (e) => {
    e.preventDefault();
    disable(false);
    setDisplay("Please Wait!!!");

    // update
    axios
      .post(updateUrl, {
        firstName,
        lastName,
        phone1,
        phone2,
        address,
        LGA,
        state,
      })
      .then(({ data }) => {
        console.log(data);
        setDisplay(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Sugar customLoading={loading} />
      <div>
        <div className="breadcrumb-holder">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Profile </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="forms">
        <div className="container-fluid">
          <header>
            <h1 className="h3 display">Profile</h1>
          </header>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-profile">
                <div className="card-header"></div>
                <div className="card-body text-center">
                  <img src={img} className="card-profile-img" alt="avatar" />
                  <h3 className="mb-3">
                    {firstName} {lastName}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form className="card" onSubmit={updateProfile}>
                <div className="card-body">
                  <h3 className="card-title">Edit Profile</h3>
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group mb-4">
                        <label className="form-label">First Name *:</label>
                        <input
                          type="text"
                          placeholder="First name"
                          className="form-control"
                          value={firstName}
                          onChange={({ target }) => {
                            setFirstName(target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group mb-4">
                        <label className="form-label">Last Name *:</label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          value={lastName}
                          onChange={({ target }) => {
                            setLastName(target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-4">
                        <label className="form-label">Phone *:</label>
                        <input
                          type="number"
                          placeholder="Phone *"
                          className="form-control"
                          value={phone1}
                          onChange={({ target }) => {
                            setPhone1(target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group mb-4">
                        <label className="form-label">Phone2 :</label>
                        <input
                          type="number"
                          placeholder="Phone2"
                          className="form-control"
                          value={phone2}
                          onChange={({ target }) => {
                            setPhone2(target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group mb-4">
                        <label className="form-label">Email address :</label>
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          value={user.email}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-4">
                        <label className="form-label">
                          Address (Required for Delivery)
                        </label>
                        <input
                          type="text"
                          placeholder="Home Address"
                          className="form-control"
                          value={address}
                          onChange={({ target }) => {
                            setAddress(target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group mb-4">
                        <label className="form-label">LGA</label>
                        <input
                          type="text"
                          placeholder="Local Government Area"
                          className="form-control"
                          value={LGA}
                          onChange={({ target }) => {
                            setLGA(target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group mb-4">
                        <label className="form-label">State</label>
                        <select
                          className="form-control custom-select"
                          value={state}
                          onChange={({ target }) => setState(target.value)}
                        >
                          <option value="">-- --</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Abuja">Abuja</option>
                          <option value="Kaduna">Kaduna</option>
                          <option value="Kano">Kano</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Ondo">Ondo</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  {!displayMsg ? (
                    ""
                  ) : (
                    <div className="alert alert-success text-center">
                      {displayMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={enable}
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
