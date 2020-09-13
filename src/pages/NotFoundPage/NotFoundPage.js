import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../error-404.svg';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className='page-not-found'>
      <img src={svg} alt='page not found' />
      <Link to='/'>
        <span className='link-text'>
          <i className='fas fa-backward'></i> Back to lists
        </span>
      </Link>
    </div>
  );
};
