import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__copy'>Trembola 2020 &copy;</div>

      <div className='footer__links'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://discord.com'>
          <i className='fab fa-discord'></i>
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com'
        >
          <i className='fab fa-facebook-square'></i>
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://web.telegram.org'
        >
          <i className='fab fa-telegram'></i>
        </a>
      </div>
    </footer>
  );
};
