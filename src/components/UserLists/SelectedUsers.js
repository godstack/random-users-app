import React from 'react';
import './UserList.scss';
import { useSelector } from 'react-redux';
import { FilterForm } from '../FilterForm/FilterForm';
import { User } from '../User/User';
import { Loader } from '../Loader/Loader';

export const SelectedUsers = () => {
  const users = useSelector(state => state.users.selectedUsers);
  const loading = useSelector(state => state.app.loading);

  const handleFilter = () => {};

  if (loading) {
    return <Loader />;
  }

  return (
    <section className='user-list'>
      <h2 className='user-list__title'>Selected users</h2>
      {users.length !== 0 && <FilterForm handleFilter={handleFilter} />}
      {users.map(user => (
        <User user={user} key={user.email} />
      ))}

      {users.length === 0 && <div className='empty'>Empty</div>}
    </section>
  );
};
