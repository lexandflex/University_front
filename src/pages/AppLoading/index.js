import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { checkValidTokenThunk } from '../../core/thunks/auth';
import './LoadingScreen.scss';

const AppLoading = (props) => {
  const { state } = props.location;
  console.log({ props });
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(checkValidTokenThunk(history, state ? state.from.pathname : '/home'));
  }, [dispatch, history, state]);
  return (
    <div className='loading-container'>
      <CircularProgress color='black' />
    </div>
  );
};

export default AppLoading;
