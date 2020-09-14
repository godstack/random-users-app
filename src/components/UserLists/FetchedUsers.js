import React, { useState } from 'react';
import { User } from '../User/User';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions';
import { Loader } from '../Loader/Loader';
import { FilterForm } from '../FilterForm/FilterForm';
import './UserList.scss';

export const FetchedUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.fetchedUsers);
  const loading = useSelector(state => state.app.loadingForFetched);

  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const filteredUsersList = users
    .filter(
      el =>
        el.name.first
          .toLowerCase()
          .includes(formData.firstName.toLowerCase()) &&
        el.name.last.toLowerCase().includes(formData.lastName.toLowerCase())
    )
    .map(user => <User user={user} key={user.email} />);

  return (
    <section className='user-list'>
      <h2 className='user-list__title'>Fetched users</h2>
      {users.length !== 0 && (
        <FilterForm
          filterType='fetchedUsers'
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {!loading && filteredUsersList}
      {filteredUsersList.length === 0 && <div className='empty'>Empty</div>}
      {loading && <Loader />}
      <button className='btn btn-upload' onClick={() => dispatch(fetchUsers())}>
        <div className='text'>{users.length ? 'Upload more' : 'Upload'}</div>
      </button>
    </section>
  );
};
