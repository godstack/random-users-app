import { FETCH_USERS, SELECT_USER, UNSELECT_USER } from './types';
import { formatTime } from '../formatTime';

const initialState = {
  fetchedUsers: [],
  selectedUsers: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      let fetchedUsers = state.fetchedUsers;

      fetchedUsers = [...fetchedUsers, ...action.payload];

      return { ...state, fetchedUsers };
    }

    case SELECT_USER: {
      let fetchedUsers = [...state.fetchedUsers];

      fetchedUsers.map(user => {
        if (user.login.uuid === action.payload) {
          user.isSelected = true;

          const date = new Date();
          user.selectionTime = formatTime(date);
        }

        return user;
      });

      let selectedUsers = [...state.selectedUsers];

      const user = fetchedUsers.find(el => el.login.uuid === action.payload);

      selectedUsers.push(user);

      return { ...state, selectedUsers, fetchedUsers };
    }

    case UNSELECT_USER: {
      let fetchedUsers = [...state.fetchedUsers];

      fetchedUsers.map(user => {
        if (user.login.uuid === action.payload) {
          user.isSelected = false;
          user.selectionTime = null;
        }

        return user;
      });

      let selectedUsers = [...state.selectedUsers];

      const index = selectedUsers.findIndex(
        el => el.login.uuid === action.payload
      );

      selectedUsers.splice(index, 1);

      return { ...state, selectedUsers, fetchedUsers };
    }

    default:
      return state;
  }
};
