import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="welcome-page sec-padding text-center p-relative o-hidden bg-gray">
        <div className="container">
          <div className="row welcome-text sec-padding flex-center">
            <div className="col-md-12 mb-20px z-index-1">
              <h1 className="color-blue">Contact Us</h1>
            </div>
            <div className="col-md-8 text-center">
              <img alt="img" src="images/y.png" className="ml-auto mr-auto" />
            </div>
          </div>
        </div>
        <div className="pattern p-absolute"></div>
      </section>
      <section className="contact-area sec-padding">
        <div className="container">
          <h1 className="title-h">Contact Us</h1>
          <p className="title-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="address">
                <p className="mb-30px">
                  <i className="color-blue bg-gray radius-50 fs-35 mr-10px text-center icon-map"></i>
                  52, Hillview Estate, Life Camp, Abuja.
                </p>
              </div>
              <div className="address">
                <p className="mb-30px">
                  <i className="color-blue bg-gray radius-50 fs-35 mr-10px text-center icon-phone"></i>
                  +817-443-2647
                </p>
              </div>
              <div className="address">
                <p className="mb-30px">
                  <i className="color-blue bg-gray radius-50 fs-35 mr-10px text-center icon-envelope"></i>
                  jmmisadev@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form
                  className="form"
                  id="contact-form"
                  method="post"
                  action="#"
                >
                  <div className="messages"></div>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            id="form_name"
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                            data-error="Name is required."
                          />
                          <div className="help-block with-errors color-orange"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            id="form_email"
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                            data-error="email is required."
                          />
                          <div className="help-block with-errors color-orange"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            id="form_subject"
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            id="form_message"
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            rows="6"
                            required="required"
                            data-error="Message."
                          ></textarea>
                          <div className="help-block with-errors color-orange"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="main-btn btn-3 color-fff radius-50px bg-orange color-orange-hvr"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
