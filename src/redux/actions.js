import {
  REQUEST_USERS,
  SELECT_USER,
  UNSELECT_USER,
  FILTER_FETCHED_USERS,
  FILTER_SELECTED_USERS,
  SHOW_LOADER_FETCHED,
  HIDE_LOADER_FETCHED,
  SHOW_LOADER_SELECTED,
  HIDE_LOADER_SELECTED
} from './types';

export const fetchUsers = () => ({
  type: REQUEST_USERS
});

export const showFetchingLoader = () => {
  return {
    type: SHOW_LOADER_FETCHED
  };
};

export const hideFetchingLoader = () => {
  return {
    type: HIDE_LOADER_FETCHED
  };
};

export const showSelectingLoader = () => {
  return {
    type: SHOW_LOADER_SELECTED
  };
};

export const hideSelectingLoader = () => {
  return {
    type: HIDE_LOADER_SELECTED
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

export const filterFetchedUsers = formData => {
  return {
    type: FILTER_FETCHED_USERS,
    payload: formData
  };
};

export const filterSelectedUsers = formData => {
  return {
    type: FILTER_SELECTED_USERS,
    payload: formData
  };
};
