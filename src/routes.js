import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FetchedUsers } from './components/FetchedUsers/FetchedUsers';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={FetchedUsers} />
    </Switch>
  );
};
