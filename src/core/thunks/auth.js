import {
  loginAction,
  loginErrorAction,
  loginSuccessAction,
  registerAction,
  registerErrorAction,
  registerSuccessAction,
  checkValidTokenAction,
  checkValidTokenErrorAction,
  checkValidTokenSuccessAction,
} from '../actions/auth';
import { showNotificationAction } from '../actions/notifications';
import { loginService, registerService, checkValidTokenService } from '../services/auth';

export const loginThunk = (username, password, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginAction());
      const response = await loginService(username, password);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        localStorage.setItem('access_token', response.headers.get('authorization'));
        const user = await response.json();
        dispatch(loginSuccessAction(user));
        dispatch(showNotificationAction({ message: 'Login Success', variant: 'success' }));
        history.push('/home');
      }
    } catch (e) {
      dispatch(loginErrorAction(e));
      dispatch(showNotificationAction({ message: 'Login Failed', variant: 'error' }));
    }
  };
};

export const registerThunk = (username, password, history) => {
  return async (dispatch) => {
    try {
      dispatch(registerAction());
      const response = await registerService(username, password);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const user = await response.json();
        dispatch(registerSuccessAction(user));
        dispatch(showNotificationAction({ message: 'Register Success', variant: 'success' }));
        history.push('/home');
      }
    } catch (e) {
      dispatch(showNotificationAction({ message: 'Register Failed', variant: 'error' }));
      dispatch(registerErrorAction(e));
    }
  };
};

export const checkValidTokenThunk = (history, path) => {
  return async (dispatch) => {
    try {
      dispatch(checkValidTokenAction());
      const response = await checkValidTokenService(localStorage.getItem('access_token'));
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        dispatch(checkValidTokenSuccessAction());
        dispatch(showNotificationAction({ message: 'User token is Valid', variant: 'success' }));
        history.push(path);
      }
    } catch (e) {
      dispatch(checkValidTokenErrorAction());
      dispatch(showNotificationAction({ message: 'User token is not Valid', variant: 'error' }));
      history.push('/login');
    }
  };
};
