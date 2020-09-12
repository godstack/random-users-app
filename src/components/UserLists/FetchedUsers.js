import React from 'react';
import { User } from '../User/User';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions';
import { Loader } from '../Loader/Loader';
import './UserList.scss';

export const FetchedUsers = ({ fetchedUsers, selectedUsers }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.fetchedUsers);
  const loading = useSelector(state => state.app.loading);
  console.log(users, loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className='user-list'>
      {users && users.map(user => <User key={user.email} user={user} />)}
      <button className='btn' onClick={() => dispatch(fetchUsers())}>
        Upload more
      </button>
    </section>
  );
};
