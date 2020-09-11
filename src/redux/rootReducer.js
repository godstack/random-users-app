import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { appReducer } from './appReduce';

export const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer
});
