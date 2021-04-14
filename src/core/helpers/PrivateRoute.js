import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { Sidebar } from '../components/SideBar';
import '../../index.scss';

export default function PrivateRoute({ component: Component, ...rest }) {
  const accessToken = localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <>
            <Sidebar />
            <div className='component-padding'>
              <Component {...props} />
            </div>
          </>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
}
