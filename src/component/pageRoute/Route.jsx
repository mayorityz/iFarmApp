import React from "react";
import { useParams } from "react-router-dom";
import Login from "./Login";
import NewAccount from "./NewUser";
import ContactUs from "./ContactUs";
import PageNotFound from "./NotFound";
import LostPassword from "./ForgotPassword";
import VerifyAccount from "./VerifyAccount";

const RoutePage = () => {
  let { pageTitle } = useParams();
  let page;
  switch (pageTitle) {
    case "login":
      page = <Login />;
      break;
    case "newaccount":
      page = <NewAccount />;
      break;
    case "contactus":
      page = <ContactUs />;
      break;
    case "forgotpassword":
      page = <LostPassword />;
      break;
    case "verify-my-account":
      page = <VerifyAccount />;
      break;
    default:
      page = <PageNotFound />;
      break;
  }
  return <>{page}</>;
};

export default RoutePage;
