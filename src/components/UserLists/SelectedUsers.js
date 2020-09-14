import React, { useState } from 'react';
import './UserList.scss';
import { useSelector } from 'react-redux';
import { FilterForm } from '../FilterForm/FilterForm';
import { User } from '../User/User';
import { Loader } from '../Loader/Loader';

export const SelectedUsers = () => {
  const users = useSelector(state => state.users.selectedUsers);
  const loading = useSelector(state => state.app.loadingForSelected);
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
      <h2 className='user-list__title'>Selected users</h2>
      {users.length !== 0 && (
        <FilterForm
          filterType={'selectedUsers'}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {!loading && filteredUsersList}
      {filteredUsersList.length === 0 && <div className='empty'>Empty</div>}
      {loading && <Loader />}
    </section>
  );
};
