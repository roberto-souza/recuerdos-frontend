import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aplication from '~/pages';
import Login from '~/pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={props => <Aplication {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
