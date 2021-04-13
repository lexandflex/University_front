export const STUDENTS_TYPES = {
  GET_STUDENTS: 'GET_STUDENTS',
  GET_STUDENTS_SUCCESS: 'GET_STUDENTS_SUCCESS',
  GET_STUDENTS_ERROR: 'GET_STUDENTS_ERROR',
  CREATE_STUDENT: 'CREATE_STUDENT',
  CREATE_STUDENT_SUCCESS: 'CREATE_STUDENT_SUCCESS',
  CREATE_STUDENT_ERROR: 'CREATE_STUDENT_ERROR',
  DELETE_STUDENT: 'DELETE_STUDENT',
  DELETE_STUDENT_SUCCESS: 'DELETE_STUDENT_SUCCESS',
  DELETE_STUDENT_ERROR: 'DELETE_STUDENT_ERROR',
  EDIT_STUDENT: 'EDIT_STUDENT',
  EDIT_STUDENT_SUCCESS: 'EDIT_STUDENT_SUCCESS',
  EDIT_STUDENT_ERROR: 'EDIT_STUDENT_ERROR',
};

export const getStudentsAction = () => {
  return {
    type: STUDENTS_TYPES.GET_STUDENTS,
  };
};

export const getStudentsSuccessAction = (payload) => {
  return {
    type: STUDENTS_TYPES.GET_STUDENTS_SUCCESS,
    payload: payload,
  };
};

export const getStudentSErrorAction = (error) => {
  return {
    type: STUDENTS_TYPES.GET_STUDENTS_ERROR,
    payload: error,
  };
};

export const createStudentAction = () => {
  return {
    type: STUDENTS_TYPES.CREATE_STUDENT,
  };
};

export const createStudentSuccessAction = (payload) => {
  return {
    type: STUDENTS_TYPES.CREATE_STUDENT_SUCCESS,
    payload: payload,
  };
};

export const createStudentErrorAction = (error) => {
  return {
    type: STUDENTS_TYPES.CREATE_STUDENT_ERROR,
    payload: error,
  };
};

export const deleteStudentAction = () => {
  return {
    type: STUDENTS_TYPES.DELETE_STUDENT,
  };
};

export const deleteStudentSuccessAction = (payload) => {
  return {
    type: STUDENTS_TYPES.DELETE_STUDENT_SUCCESS,
    payload,
  };
};

export const deleteStudentErrorAction = (error) => {
  return {
    type: STUDENTS_TYPES.DELETE_STUDENT_ERROR,
  };
};

export const editStudentAction = () => {
  return {
    type: STUDENTS_TYPES.EDIT_STUDENT,
  };
};

export const editStudentSuccessAction = (payload) => {
  return {
    type: STUDENTS_TYPES.EDIT_STUDENT_SUCCESS,
    payload: payload,
  };
};

export const editStudentErrorAction = (error) => {
  return {
    type: STUDENTS_TYPES.EDIT_STUDENT_ERROR,
    payload: error,
  };
};
