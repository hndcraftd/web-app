import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Auth from "./pages/Auth";
import GettingStarted from "./pages/GetStarted";
import Benefits from "./pages/Benefits";
import About from "./pages/About";
import Status from "./pages/Status";
import Video from "./pages/Video";

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
        <Route path="/start" component={GettingStarted} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/about" component={About} />
        <Route path="/promo-video" component={Video} />
        

        <Route path="/status/:id" component={Status} />
      </Switch>
    </>
  );
}

export default App;
