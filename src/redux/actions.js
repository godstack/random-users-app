import {
  SHOW_LOADER,
  HIDE_LOADER,
  REQUEST_USERS,
  SELECT_USER,
  UNSELECT_USER
} from './types';

export const fetchUsers = () => ({
  type: REQUEST_USERS
});

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  };
};

export const selectUser = userId => {
  return {
    type: SELECT_USER,
    payload: userId
  };
};

export const unselectUser = userId => {
  return {
    type: UNSELECT_USER,
    payload: userId
  };
};
