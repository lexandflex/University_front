import React from 'react';
import './Login.scss';

export const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <h1>Login</h1>
        <input type='text' placeholder='Username' className='login-field'></input>
        <input type='password' placeholder='Password' className='login-field'></input>
        <input type='button' value='Login' className='login-button'></input>
      </div>
    </div>
  );
};
