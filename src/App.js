import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navigation from "./component/navigation";
import Index from "./component/Index";
import Footer from "./component/Footer";
import RoutePage from "./component/pageRoute/Route";
import Dashboard from "./component/dashboard/Index";
import MarketPlace from "./component/dashboard/Marketplace";
import SideBar from "./component/dashboard/essComponents/Sidebar";
import AdminNav from "./component/dashboard/essComponents/AdminNavigation";
import AdminIndex from "./component/admin/Index";

function App() {
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path="/admin">
          <AdminIndex />
        </Route>
        <Route path={`${path}dashboard/:page`}>
          <SideBar />
          <MarketPlace />
        </Route>
        <Route exact path="/dashboard">
          <div className="page">
            <AdminNav />
            <SideBar />
            <div style={{ marginTop: 65 }}></div>
            <Dashboard />
          </div>
        </Route>
        <Route path={`${path}:pageTitle`}>
          <Navigation />
          <RoutePage />
          <Footer />
        </Route>

        <Route exact path="/">
          <Navigation />
          <Index />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
