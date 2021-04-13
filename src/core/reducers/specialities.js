import { SPECIALITIES_TYPES } from '../actions/specialities';

const initialState = {
  specialities: null,
  error: '',
  isLoading: false,
};

export const specialitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIALITIES_TYPES.GET_SPECIALITIES:
      return { ...state, isLoading: true };
    case SPECIALITIES_TYPES.GET_SPECIALITIES_SUCCESS:
      return {
        ...state,
        specialities: action.payload,
        error: '',
        isLoading: false,
      };
    case SPECIALITIES_TYPES.GET_SPECIALITIES_ERROR:
      return {
        ...state,
        error: action.payload,
        specialities: null,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
