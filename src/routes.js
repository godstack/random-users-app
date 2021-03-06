import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { UserDetailsPage } from './pages/UserDetailsPage/UserDetailsPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/user/:id' component={UserDetailsPage} />
      <Route exact path='/not-found' component={NotFoundPage} />
      <Redirect from='*' to='/not-found' />
    </Switch>
  );
};
