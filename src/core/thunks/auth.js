import {
  loginAction,
  loginErrorAction,
  loginSuccessAction,
  registerAction,
  registerErrorAction,
} from '../actions/auth';
import { loginService, registerService } from '../services/auth';

export const loginThunk = (username, password, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginAction());
      const response = await loginService(username, password);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        localStorage.setItem('access_token', response.headers.get('authorization'));
        const user = await response.json();
        console.log({ user });
        dispatch(loginSuccessAction(user));
        history.push('/home');
      }
    } catch (e) {
      console.log(e);
      dispatch(loginErrorAction(e));
    }
  };
};

export const registerThunk = (username, password, history) => {
  return async (dispatch) => {
    try {
      dispatch(registerAction());
      const response = await registerService(username, password);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const user = await response.json();
        dispatch(loginSuccessAction(user));
        history.push('/home');
      }
    } catch (e) {
      console.log(e);
      dispatch(registerErrorAction(e));
    }
  };
};
