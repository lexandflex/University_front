export const FACULTIES_TYPES = {
  GET_FACULTIES: 'GET_FACULTIES',
  GET_FACULTIES_SUCCESS: 'GET_FACULTIES_SUCCESS',
  GET_FACULTIES_ERROR: 'GET_FACULTIES_ERROR',
};

export const facultiesAction = () => {
  return {
    type: FACULTIES_TYPES.GET_FACULTIES,
  };
};

export const facultiesSuccessAction = (payload) => {
  return {
    type: FACULTIES_TYPES.GET_FACULTIES_SUCCESS,
    payload: payload,
  };
};

export const facultiesErrorAction = (error) => {
  return {
    type: FACULTIES_TYPES.GET_FACULTIES_ERROR,
    payload: error,
  };
};
