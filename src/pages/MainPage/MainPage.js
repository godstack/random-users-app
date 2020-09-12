import React from 'react';
import { FetchedUsers } from '../../components/UserLists/FetchedUsers';
import { SelectedUsers } from '../../components/UserLists/SelectedUsers';
import './MainPage.scss';

export const MainPage = () => {
  return (
    <section className='main-page'>
      <section className='lists'>
        <FetchedUsers />
        <SelectedUsers />
      </section>
    </section>
  );
};
