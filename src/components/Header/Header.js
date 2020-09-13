import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from '../../formatTime';
import './Header.scss';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

export const Header = props => {
  const selectedLength = useSelector(state => state.users.selectedUsers.length);
  const [time, setTime] = useState('');

  setInterval(() => {
    setTime(formatTime(new Date()));
  }, 250);

  return (
    <header className='header'>
      <div
        className={classNames(
          'header__info',
          {
            'invisible-link': window.location.pathname === '/'
          },
          'header__link'
        )}
      >
        <Link to='/'>
          <span className='link__text'>
            <i className='fas fa-caret-square-left'></i> BACK
          </span>
        </Link>
      </div>
      <div className='header__info'>Time: {time}</div>
      <div className='header__info'>Selected users: {selectedLength}</div>
    </header>
  );
};
