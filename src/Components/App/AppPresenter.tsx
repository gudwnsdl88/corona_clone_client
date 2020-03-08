import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../Route/Home/HomeContainer';

const AppPresenter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppPresenter;
