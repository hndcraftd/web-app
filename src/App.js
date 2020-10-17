import React from 'react';
import {Route, Switch } from 'react-router-dom';

import home from "./pages/home"
import dashboard from "./pages/dashboard"
import insights from "./pages/insights"
import order from "./pages/order"

function App() {
  return (
    <>
      
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/insights" component={insights} />
        <Route path="/order" component={order} />
      </Switch>
    </>
  );
}

export default App;
