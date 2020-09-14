import {
  SHOW_LOADER_FETCHED,
  HIDE_LOADER_FETCHED,
  SHOW_LOADER_SELECTED,
  HIDE_LOADER_SELECTED
} from './types';

const initialState = {
  loadingForFetched: false,
  loadingForSelected: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_FETCHED:
      return { ...state, loadingForFetched: true };
    case HIDE_LOADER_FETCHED:
      return { ...state, loadingForFetched: false };
    case SHOW_LOADER_SELECTED:
      return { ...state, loadingForSelected: true };
    case HIDE_LOADER_SELECTED:
      return { ...state, loadingForSelected: false };
    default:
      return state;
  }
};
