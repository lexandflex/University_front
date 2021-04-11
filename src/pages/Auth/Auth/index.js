import { LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginThunk, registerThunk } from '../../../core/thunks/auth';
import './Auth.scss';

const Auth = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = useSelector((state) => state.authState.error);
  const isLoading = useSelector((state) => state.authState.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = window.location.pathname.includes('/login');
  const inputHandler = (type) => (event) => {
    switch (type) {
      case 'username': {
        setUserName(event.target.value);
        break;
      }
      case 'password': {
        setPassword(event.target.value);
        break;
      }
      default:
        break;
    }
  };

  const loginHandler = () => {
    if (username && password) {
      setUserName('');
      setPassword('');
      isLogin
        ? dispatch(loginThunk(username, password, history))
        : dispatch(registerThunk(username, password, history));
    }
  };

  return (
    <div className='form-container'>
      <div className={`auth-form ${errorMessage && 'auth-form__error'}`}>
        <img alt='' src='/images/vsu-logo.png' />
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        {!isLoading ? (
          <>
            <input
              type='text'
              placeholder={errorMessage || 'Username'}
              className={`auth-field ${errorMessage && 'auth-field__error'}`}
              value={username}
              onChange={inputHandler('username')}
            ></input>
            <input
              type='password'
              placeholder={errorMessage || 'Password'}
              className={`auth-field ${errorMessage && 'auth-field__error'}`}
              value={password}
              onChange={inputHandler('password')}
            ></input>
            <input
              type='button'
              value={isLogin ? 'Login' : 'Register'}
              className='auth-button'
              onClick={loginHandler}
            ></input>
            <a href={isLogin ? '/register' : '/login'}>
              {isLogin ? 'No account? Register' : 'Have an account? Login'}
            </a>
          </>
        ) : (
          <div className='linear-progress'>
            <LinearProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
