import React, { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const VerifyAccount = () => {
  const url = "https://ifarms-app.herokuapp.com/verify-my-account";
  const parsed = queryString.parse(window.location.search);
  const { email, uuid } = parsed;

  const override = css`
    border-color: red;
  `;

  const [message, setMsg] = useState("");
  const [isLoading, Loaded] = useState(true);

  useEffect(() => {
    setMsg("Please Wait! We are verifying your account!");
    let query = async () => {
      try {
        let response = await axios.post(url, { email, uuid });
        console.log(response);
        if (response.data === "ok!") {
          setMsg("Your Account Has Been Verified!!!");
          Loaded(false);
          window.location = "login";
        } else setMsg(response.data);
      } catch (error) {
        console.log(error);
        setMsg(error.message);
      }
    };
    query();
  }, [email, uuid]);
  return (
    <>
      <section className="welcome-page sec-padding pb-150px p-relative o-hidden bg-gray h-auto">
        <div className="container">
          <div className="row welcome-text sec-padding flex-center">
            <div className="alert alert-warning text-center">
              {!message ? null : message}
              <PulseLoader
                css={override}
                size={15}
                color={"#123abc"}
                loading={isLoading}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyAccount;
