import React, { useState } from 'react';
import './FilterForm.scss';

export const FilterForm = ({ handleFilter }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className='ui-form'>
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
      <button onClick={handleFilter} className='filter-btn'>
        Filter
      </button>
    </form>
  );
};
