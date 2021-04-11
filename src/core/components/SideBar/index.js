import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHome, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './SideBar.scss';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../actions/auth';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const logoutHandle = () => {
    localStorage.removeItem('access_token');
    dispatch(logoutAction());
  };

  return (
    <div className='navigation'>
      <ul>
        <li>
          <a href='/home'>
            <span className='navigation-icon'>
              <FontAwesomeIcon className='fa' icon={faHome} />
            </span>
            <span className='navigation-name'>Home</span>
          </a>
        </li>
        <li>
          <a href='/students'>
            <span className='navigation-icon'>
              <FontAwesomeIcon className='fa' icon={faUsers} />
            </span>
            <span className='navigation-name'>Students</span>
          </a>
        </li>

        <li>
          <a href='/students-plans'>
            <span className='navigation-icon'>
              <FontAwesomeIcon className='fa' icon={faCalendarAlt} />
            </span>
            <span className='navigation-name'>Students plans</span>
          </a>
        </li>
        <li>
          <a href='/login' onClick={logoutHandle}>
            <span className='navigation-icon'>
              <FontAwesomeIcon className='fa' icon={faSignOutAlt} />
            </span>
            <span className='navigation-name'>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
