export const SPECIALITIES_TYPES = {
  GET_SPECIALITIES: 'GET_SPECIALITIES',
  GET_SPECIALITIES_SUCCESS: 'GET_SPECIALITIES_SUCCESS',
  GET_SPECIALITIES_ERROR: 'GET_SPECIALITIES_ERROR',
  CREATE_SPECIALITY: 'CREATE_SPECIALITY',
  CREATE_SPECIALITY_SUCCESS: 'CREATE_SPECIALITY_SUCCESS',
  CREATE_SPECIALITY_ERROR: 'CREATE_SPECIALITY_ERROR',
  DELETE_SPECIALITY: 'DELETE_SPECIALITY',
  DELETE_SPECIALITY_SUCCESS: 'DELETE_SPECIALITY_SUCCESS',
  DELETE_SPECIALITY_ERROR: 'DELETE_SPECIALITY_ERROR',
  EDIT_SPECIALITY: 'EDIT_SPECIALITY',
  EDIT_SPECIALITY_SUCCESS: 'EDIT_SPECIALITY_SUCCESS',
  EDIT_SPECIALITY_ERROR: 'EDIT_SPECIALITY_ERROR',
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

export const createSpecialityAction = () => {
  return {
    type: SPECIALITIES_TYPES.CREATE_SPECIALITY,
  };
};

export const createSpecialitySuccessAction = (payload) => {
  return {
    type: SPECIALITIES_TYPES.CREATE_SPECIALITY_SUCCESS,
    payload: payload,
  };
};

export const createSpecialityErrorAction = (error) => {
  return {
    type: SPECIALITIES_TYPES.CREATE_SPECIALITY_ERROR,
    payload: error,
  };
};

export const deleteSpecialityAction = () => {
  return {
    type: SPECIALITIES_TYPES.DELETE_SPECIALITY,
  };
};

export const deleteSpecialitySuccessAction = (payload) => {
  return {
    type: SPECIALITIES_TYPES.DELETE_SPECIALITY_SUCCESS,
    payload,
  };
};

export const deleteSpecialityErrorAction = (error) => {
  return {
    type: SPECIALITIES_TYPES.DELETE_SPECIALITY_ERROR,
  };
};

export const editSpecialityAction = () => {
  return {
    type: SPECIALITIES_TYPES.EDIT_SPECIALITY,
  };
};

export const editSpecialitySuccessAction = (payload) => {
  return {
    type: SPECIALITIES_TYPES.EDIT_SPECIALITY_SUCCESS,
    payload: payload,
  };
};

export const editSpecialityErrorAction = (error) => {
  return {
    type: SPECIALITIES_TYPES.EDIT_SPECIALITY_ERROR,
    payload: error,
  };
};
