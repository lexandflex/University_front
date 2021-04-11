export const AUTH_TYPES = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
};

export const loginAction = () => {
  return {
    type: AUTH_TYPES.LOGIN,
  };
};

export const loginSuccessAction = (payload) => {
  return {
    type: AUTH_TYPES.LOGIN_SUCCESS,
    payload: payload,
  };
};

export const loginErrorAction = (error) => {
  return {
    type: AUTH_TYPES.LOGIN_ERROR,
    payload: error,
  };
};

export const logoutAction = () => {
  return {
    type: AUTH_TYPES.LOGOUT,
  };
};

export const registerAction = () => {
  return {
    type: AUTH_TYPES.REGISTER,
  };
};

export const registerSuccessAction = (payload) => {
  return {
    type: AUTH_TYPES.REGISTER_SUCCESS,
    payload: payload,
  };
};

export const registerErrorAction = (error) => {
  return {
    type: AUTH_TYPES.REGISTER_ERROR,
    error: error,
  };
};
