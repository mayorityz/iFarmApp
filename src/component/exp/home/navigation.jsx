import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Abt from "./about";
import Homex from ".";
import Pages from "./routes/pages";

const NavBar = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}`}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/aboutpage`}>About Us</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Index Page Here! or another component</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Pages />
        </Route>
      </Switch>
    </>
  );
};

export default NavBar;
