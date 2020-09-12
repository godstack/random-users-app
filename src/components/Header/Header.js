import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from '../../formatTime';
import './Header.scss';

export const Header = () => {
  const selectedLength = useSelector(state => state.users.selectedUsers.length);
  const [time, setTime] = useState('');

  setInterval(() => {
    setTime(formatTime(new Date()));
  }, 250);

  return (
    <header className='header'>
      <div className='header__info'>Time: {time}</div>
      <div className='header__info'>Selected users: {selectedLength}</div>
    </header>
  );
};
