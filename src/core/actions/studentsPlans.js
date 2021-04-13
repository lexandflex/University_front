export const STUDENTS_PLANS_TYPES = {
  GET_STUDENTS_PLANS: 'GET_STUDENTS_PLANS',
  GET_STUDENTS_PLANS_SUCCESS: 'GET_STUDENTS_PLANS_SUCCESS',
  GET_STUDENTS_PLANS_ERROR: 'GET_STUDENTS_PLANS_ERROR',
  CREATE_STUDENTS_PLAN: 'CREATE_STUDENTS_PLAN',
  CREATE_STUDENTS_PLAN_SUCCESS: 'CREATE_STUDENTS_PLAN_SUCCESS',
  CREATE_STUDENTS_PLAN_ERROR: 'CREATE_STUDENTS_PLAN_ERROR',
  DELETE_STUDENTS_PLAN: 'DELETE_STUDENTS_PLAN',
  DELETE_STUDENTS_PLAN_SUCCESS: 'DELETE_STUDENTS_PLAN_SUCCESS',
  DELETE_STUDENTS_PLAN_ERROR: 'DELETE_STUDENTS_PLAN_ERROR',
  EDIT_STUDENTS_PLAN: 'EDIT_STUDENTS_PLAN',
  EDIT_STUDENTS_PLAN_SUCCESS: 'EDIT_STUDENTS_PLAN_SUCCESS',
  EDIT_STUDENTS_PLAN_ERROR: 'EDIT_STUDENTS_PLAN_ERROR',
};

export const getStudentsPlansAction = () => {
  return {
    type: STUDENTS_PLANS_TYPES.GET_STUDENTS_PLANS,
  };
};

export const getStudentsPlansSuccessAction = (payload) => {
  return {
    type: STUDENTS_PLANS_TYPES.GET_STUDENTS_PLANS_SUCCESS,
    payload: payload,
  };
};

export const getStudentsPlansErrorAction = (error) => {
  return {
    type: STUDENTS_PLANS_TYPES.GET_STUDENTS_PLANS_ERROR,
    payload: error,
  };
};

export const createStudentsPlanAction = () => {
  return {
    type: STUDENTS_PLANS_TYPES.CREATE_STUDENTS_PLAN,
  };
};

export const createStudentsPlanSuccessAction = (payload) => {
  return {
    type: STUDENTS_PLANS_TYPES.CREATE_STUDENTS_PLAN_SUCCESS,
    payload: payload,
  };
};

export const createStudentsPlanErrorAction = (error) => {
  return {
    type: STUDENTS_PLANS_TYPES.CREATE_STUDENTS_PLAN_ERROR,
    payload: error,
  };
};

export const deleteStudentsPlanAction = () => {
  return {
    type: STUDENTS_PLANS_TYPES.DELETE_STUDENTS_PLAN,
  };
};

export const deleteStudentsPlanSuccessAction = (payload) => {
  return {
    type: STUDENTS_PLANS_TYPES.DELETE_STUDENTS_PLAN_SUCCESS,
    payload,
  };
};

export const deleteStudentsPlanErrorAction = (error) => {
  return {
    type: STUDENTS_PLANS_TYPES.DELETE_STUDENTS_PLAN_ERROR,
  };
};

export const editStudentsPlanAction = () => {
  return {
    type: STUDENTS_PLANS_TYPES.EDIT_STUDENTS_PLAN,
  };
};

export const editStudentsPlanSuccessAction = (payload) => {
  return {
    type: STUDENTS_PLANS_TYPES.EDIT_STUDENTS_PLAN_SUCCESS,
    payload: payload,
  };
};

export const editStudentsPlanErrorAction = (error) => {
  return {
    type: STUDENTS_PLANS_TYPES.EDIT_STUDENTS_PLAN_ERROR,
    payload: error,
  };
};
