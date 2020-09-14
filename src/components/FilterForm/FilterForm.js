import React from 'react';
import './FilterForm.scss';
import { useDispatch } from 'react-redux';
import { filterSelectedUsers, filterFetchedUsers } from '../../redux/actions';

export const FilterForm = ({ filterType, formData, setFormData }) => {
  const dispatch = useDispatch();

  const handleChange = async e => {
    await setFormData({ ...formData, [e.target.name]: e.target.value });

    if (filterType === 'fetchedUsers') {
      dispatch(filterFetchedUsers(formData));
    } else if (filterType === 'selectedUsers') {
      dispatch(filterSelectedUsers(formData));
    }
  };

  return (
    <form className='ui-form'>
      <div className='filter'>Type to Filter</div>
      <div className='form-row'>
        <input
          type='text'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
          autoComplete='off'
          placeholder='First name'
        />
      </div>
      <div className='form-row'>
        <input
          type='text'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
          autoComplete='off'
          placeholder='Last name'
        />
      </div>
    </form>
  );
};
