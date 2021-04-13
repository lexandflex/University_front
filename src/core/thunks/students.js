import { showNotificationAction } from '../actions/notifications';
import {
  getStudentsAction,
  getStudentsSuccessAction,
  getStudentSErrorAction,
  createStudentAction,
  createStudentSuccessAction,
  createStudentErrorAction,
  deleteStudentAction,
  deleteStudentSuccessAction,
  deleteStudentErrorAction,
  editStudentAction,
  editStudentSuccessAction,
  editStudentErrorAction,
} from '../actions/students';
import {
  getStudentsService,
  createStudentService,
  deleteStudentService,
  editStudentService,
} from '../services/students';
import { getSpecialitiesThunk } from './specialities';

export const getStudentsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(getStudentsAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await getStudentsService(accessToken);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const students = await response.json();
        dispatch(getSpecialitiesThunk());
        console.log({ students });
        dispatch(getStudentsSuccessAction(students));
        dispatch(showNotificationAction({ message: 'Success get students', variant: 'success' }));
      }
    } catch (e) {
      console.log(e);
      dispatch(getStudentSErrorAction(e));
      dispatch(showNotificationAction({ message: 'Get students failed', variant: 'error' }));
    }
  };
};

export const createStudentThunk = (student) => {
  return async (dispatch) => {
    try {
      dispatch(createStudentAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await createStudentService(accessToken, student);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const student = await response.json();
        console.log({ student });
        dispatch(createStudentSuccessAction(student));
        dispatch(showNotificationAction({ message: 'Success create student', variant: 'success' }));
      }
    } catch (e) {
      console.log(e);
      dispatch(createStudentErrorAction(e));
      dispatch(showNotificationAction({ message: 'Create student failed', variant: 'error' }));
    }
  };
};

export const deleteStudentThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteStudentAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await deleteStudentService(accessToken, id);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        dispatch(deleteStudentSuccessAction(id));
        dispatch(showNotificationAction({ message: 'Success delete student', variant: 'success' }));
      }
    } catch (e) {
      console.log(e);
      dispatch(deleteStudentErrorAction(e));
      dispatch(showNotificationAction({ message: 'Delete student failed', variant: 'error' }));
    }
  };
};

export const editStudentThunk = (student) => {
  return async (dispatch) => {
    try {
      dispatch(editStudentAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await editStudentService(accessToken, student);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        // const updatedStudent = await response.json();
        // console.log({ updatedStudent });
        dispatch(editStudentSuccessAction(student));
        dispatch(showNotificationAction({ message: 'Success edit student', variant: 'success' }));
      }
    } catch (e) {
      console.log(e);
      dispatch(editStudentErrorAction(e));
      dispatch(showNotificationAction({ message: 'Edit student failed', variant: 'error' }));
    }
  };
};
