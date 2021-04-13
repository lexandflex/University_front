export const SPECIALITIES_TYPES = {
  GET_SPECIALITIES: 'GET_SPECIALITIES',
  GET_SPECIALITIES_SUCCESS: 'GET_SPECIALITIES_SUCCESS',
  GET_SPECIALITIES_ERROR: 'GET_SPECIALITIES_ERROR',
};

export const specialitiesAction = () => {
  return {
    type: SPECIALITIES_TYPES.GET_SPECIALITIES,
  };
};

export const specialitiesSuccessAction = (payload) => {
  return {
    type: SPECIALITIES_TYPES.GET_SPECIALITIES_SUCCESS,
    payload: payload,
  };
};

export const specialitiesErrorAction = (error) => {
  return {
    type: SPECIALITIES_TYPES.GET_SPECIALITIES_ERROR,
    payload: error,
  };
};
