import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Order from "./pages/Order";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Insights" component={Insights} />
        <Route path="/Order" component={Order} />
        <Route path="/Auth" component={Auth} />
      </Switch>
    </>
  );
}

export default App;
