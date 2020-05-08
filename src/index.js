import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 7000,
  offset: "10px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Router>
      <App />
    </Router>
  </AlertProvider>,
  document.getElementById("root")
);
