import React from 'react';
import './UserList.scss';
import { useSelector } from 'react-redux';
import { User } from '../User/User';

export const SelectedUsers = () => {
  const users = useSelector(state => state.users.selectedUsers);

  return (
    <section className='user-list'>
      <h2 className='user-list__title'>Selected users</h2>
      {users.map(user => (
        <User user={user} key={user.email} />
      ))}

      {users.length === 0 && <div className='empty'>Empty</div>}
    </section>
  );
};
