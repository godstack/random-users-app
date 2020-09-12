import React from 'react';
import './UserList.scss';
import { useSelector, connect } from 'react-redux';
import { User } from '../User/User';

export const SelectedUsers = () => {
  const users = useSelector(state => state.users.selectedUsers);
  return (
    <section className='user-list'>
      {users.map(user => (
        <User user={user} key={user.email} />
      ))}
    </section>
  );
};
