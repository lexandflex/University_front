import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { Home } from '../../pages/Home';
import { Sidebar } from '../components/SideBar';

export default function PrivateRoute({ component: Component, ...rest }) {
  const accessToken = localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <>
            <Sidebar />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
}
