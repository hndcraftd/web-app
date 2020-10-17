import React from 'react';
import {Route, Switch } from 'react-router-dom';

import dashboard from "./pages/dashboard"
import insights from "./pages/insights"
import order from "./pages/order"

function App() {
  return (
    <>
      
      <Switch>
        <Route path="/" component={dashboard} exact />
        <Route path="/insights" component={insights} />
        <Route path="/order" component={order} />
      </Switch>
    </>
  );
}

export default App;
