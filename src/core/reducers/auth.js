import { AUTH_TYPES } from '../actions/auth';

const initialState = {
  user: null,
  error: '',
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return { ...state, isLoading: true };
    case AUTH_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        isLoading: false,
      };
    case AUTH_TYPES.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        user: null,
        isLoading: false,
      };

    case AUTH_TYPES.REGISTER:
      return { ...state, isLoading: true };
    case AUTH_TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
      };
    case AUTH_TYPES.REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case AUTH_TYPES.LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return { ...state };
  }
};
