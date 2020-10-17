import React from 'react';
import {Route, Switch } from 'react-router-dom';

import home from "./pages/home"
import dashboard from "./pages/dashboard"
import insights from "./pages/insights"
import order from "./pages/order"
import login from "./pages/login"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/insights" component={insights} />
        <Route path="/order" component={order} />
        <Route path="/login" component={login} />
      </Switch>
    </>
  );
}

export default App;
