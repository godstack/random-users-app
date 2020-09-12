import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../error-404.svg';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className='page-not-found'>
      <img src={svg} />
      <Link to='/'>
        <span className='link-text'>Back to lists</span>
      </Link>
    </div>
  );
};
