import React, { useState } from 'react';
import './FilterForm.scss';
import { useDispatch } from 'react-redux';
import { filterSelectedUsers } from '../../redux/actions';

export const FilterForm = ({ filterArr, formData, setFormData }) => {
  const dispatch = useDispatch();

  const handleChange = async e => {
    await setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(filterSelectedUsers(formData));
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
