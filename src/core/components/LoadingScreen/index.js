import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <div className='loading-wrapper'>
      <CircularProgress style={{ color: 'white' }} />
    </div>
  );
};

export default LoadingScreen;
