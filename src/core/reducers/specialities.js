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
    case SPECIALITIES_TYPES.CREATE_SPECIALITY:
      return { ...state, isLoading: true };
    case SPECIALITIES_TYPES.CREATE_SPECIALITY_SUCCESS:
      return {
        ...state,
        specialities: [...state.specialities, action.payload],
        error: '',
        isLoading: false,
      };
    case SPECIALITIES_TYPES.CREATE_SPECIALITY_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SPECIALITIES_TYPES.DELETE_SPECIALITY:
      return { ...state, isLoading: true };
    case SPECIALITIES_TYPES.DELETE_SPECIALITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        specialities: state.specialities.filter((speciality) => speciality.id !== action.payload),
      };
    case SPECIALITIES_TYPES.DELETE_SPECIALITY_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case SPECIALITIES_TYPES.EDIT_SPECIALITY:
      return { ...state, isLoading: true };
    case SPECIALITIES_TYPES.EDIT_SPECIALITY_SUCCESS:
      return {
        ...state,
        specialities: state.specialities.map((speciality) =>
          speciality.id === action.payload.id ? action.payload : speciality
        ),
        error: '',
        isLoading: false,
      };
    case SPECIALITIES_TYPES.EDIT_SPECIALITY_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
