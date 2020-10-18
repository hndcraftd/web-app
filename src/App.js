import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/insights" component={Insights} />
        <Route path="/orders/:id" component={Order} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />

      </Switch>
    </>
  );
}

export default App;
