import { FACULTIES_TYPES } from '../actions/faculties';

const initialState = {
  faculties: null,
  error: '',
  isLoading: false,
};

export const facultiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACULTIES_TYPES.GET_FACULTIES:
      return { ...state, isLoading: true };
    case FACULTIES_TYPES.GET_FACULTIES_SUCCESS:
      return {
        ...state,
        faculties: action.payload,
        error: '',
        isLoading: false,
      };
    case FACULTIES_TYPES.GET_FACULTIES_ERROR:
      return {
        ...state,
        error: action.payload,
        faculties: null,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
