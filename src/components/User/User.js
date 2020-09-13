import React from 'react';
import './User.scss';
import { useDispatch } from 'react-redux';
import { selectUser, unselectUser } from '../../redux/actions';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

export const User = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectUser = () => {
    if (user.isSelected) {
      dispatch(unselectUser(user.login.uuid));
    } else {
      dispatch(selectUser(user.login.uuid));
    }
  };

  const handleRedirectToDetailsPage = () => {
    history.push(`/user/${user.login.uuid}`);
  };

  return (
    <section className='user-item'>
      <div className='user'>
        <div
          onClick={handleRedirectToDetailsPage}
          className='user-item__image'
          style={{ backgroundImage: `url('${user.picture.thumbnail}')` }}
        ></div>

        <div className='user-item__info' onClick={handleRedirectToDetailsPage}>
          {user.name.first} {user.name.last}
        </div>

        <button
          className={classNames('btn', 'btn-user', {
            'btn-select': !user.isSelected,
            'btn-unselect': user.isSelected
          })}
          onClick={handleSelectUser}
        >
          <div className='text'>{user.isSelected ? 'Unselect' : 'Select'}</div>
        </button>
      </div>
      <div className='selection-time'>
        {user.selectionTime ? `Selection time: ${user.selectionTime}` : null}
      </div>
    </section>
  );
};
