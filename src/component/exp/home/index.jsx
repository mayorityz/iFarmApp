import React from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import Abt from "./about";
import NavBar from "./navigation";
import FooterBar from "./footer";

const Homex = () => {
  let { path, url } = useRouteMatch();
  // alert(url);

  return (
    <>
      <NavBar />
    </>
  );
};

export default Homex;
