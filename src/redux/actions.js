import { FETCH_USERS, SHOW_LOADER, HIDE_LOADER } from './types';

export const fetchUsers = () => {
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await fetch('https://randomuser.me/api/?results=20');
      const json = await response.json();
      const users = json.results;

      dispatch({ type: FETCH_USERS, payload: users });
      dispatch(hideLoader());
    } catch (e) {}
  };
};

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
