import React from "react";

const LostPassword = () => {
  return (
    <section className="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
      <div className="container">
        <div className="row welcome-text sec-padding flex-center">
          <div className="col-md-6 mb-50px">
            <img alt="img" src="images/x.png" className="ml-auto mr-auto" />
          </div>
          <div className="col-md-6">
            <i className="fa fa-lock fs-50 color-blue mb-10px"></i>
            <h2>Forget Your Password !</h2>
            <p>Don't worry ! enter your email and we will send you a rest</p>
            <form id="log-in" className="mt-30px">
              <div className="form-group p-relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="d-block mb-20px"
                />
                <i className="fa fa-envelope fs-20 color-blue p-absolute"></i>
              </div>
              <button className="main-btn btn-3 before-gray">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pattern p-absolute"></div>
    </section>
  );
};

export default LostPassword;
