import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './UserDetailsPage.scss';

export const UserDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [index, setIndex] = useState(0);

  const user = useSelector(state =>
    state.users.fetchedUsers.find(el => el.login.uuid === id)
  );

  const showBirthDate = dateStr => {
    const date = new Date(dateStr);

    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const keyValueArr = [
    ['Hi, My name is', `${user?.name?.first} ${user?.name?.last}`],
    ['My email address is', `${user?.email}`],
    ['My birthday is', `${showBirthDate(user?.dob?.date)}`],
    [
      'My address is',
      `${user?.location?.country} ${user?.location?.city} ${user?.location?.street?.name}  ${user?.location?.street?.number}`
    ],
    ['My phone number is', `${user?.cell}`],
    ['My password is', `${user?.login?.password}`]
  ];

  const icons = [
    'fas fa-user',
    'fas fa-envelope',
    'far fa-clipboard',
    'fas fa-map-marked-alt',
    'fas fa-phone',
    'fas fa-lock'
  ];

  useEffect(() => {
    if (!user) {
      history.push('/not-found');
    }
  }, [user, history]);

  console.log(user);

  return (
    <div className='user-details'>
      <div
        className='user-details__image'
        style={{ backgroundImage: `url(${user?.picture?.large})` }}
      ></div>
      <div className='info__title'>{keyValueArr[index][0]}</div>
      <div className='info__text'>{keyValueArr[index][1]}</div>
      <div className='icons'>
        {icons.map((el, i) => (
          <i
            className={classNames(el, { active: i === index })}
            onClick={() => setIndex(i)}
          ></i>
        ))}
      </div>
    </div>
  );
};
