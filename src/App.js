import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Order from "./pages/Order";
import Login from "./pages/Auth";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/insights" component={Insights} />
        <Route path="/order" component={Order} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
