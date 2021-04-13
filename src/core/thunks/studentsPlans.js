import { showNotificationAction } from '../actions/notifications';
import {
  createStudentAction,
  createStudentSuccessAction,
  getStudentSErrorAction,
} from '../actions/students';
import {
  createStudentsPlanAction,
  createStudentsPlanErrorAction,
  createStudentsPlanSuccessAction,
  deleteStudentsPlanAction,
  deleteStudentsPlanErrorAction,
  deleteStudentsPlanSuccessAction,
  editStudentsPlanAction,
  editStudentsPlanErrorAction,
  editStudentsPlanSuccessAction,
  getStudentsPlansAction,
  getStudentsPlansSuccessAction,
} from '../actions/studentsPlans';
import {
  getStudentsPlansService,
  createStudentsPlanService,
  deleteStudentsPlanService,
  editStudentsPlanService,
} from '../services/studentsPlans';
import { getSpecialitiesThunk } from './specialities';

export const getStudentsPlansThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(getStudentsPlansAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await getStudentsPlansService(accessToken);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const plans = await response.json();
        dispatch(getSpecialitiesThunk());
        console.log({ plans });
        dispatch(getStudentsPlansSuccessAction(plans));
        dispatch(
          showNotificationAction({ message: 'Success get students plans', variant: 'success' })
        );
      }
    } catch (e) {
      console.log(e);
      dispatch(getStudentSErrorAction(e));
      dispatch(showNotificationAction({ message: 'Get students plans failed', variant: 'error' }));
    }
  };
};

export const createStudentsPlanThunk = (studentPlan) => {
  return async (dispatch) => {
    try {
      dispatch(createStudentsPlanAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await createStudentsPlanService(accessToken, studentPlan);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const studentPlan = await response.json();
        console.log({ studentPlan });
        dispatch(createStudentsPlanSuccessAction(studentPlan));
        dispatch(
          showNotificationAction({ message: 'Success create student plan', variant: 'success' })
        );
      }
    } catch (e) {
      console.log(e);
      dispatch(createStudentsPlanErrorAction(e));
      dispatch(showNotificationAction({ message: 'Create student plan failed', variant: 'error' }));
    }
  };
};

export const deleteStudentsPlanThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteStudentsPlanAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await deleteStudentsPlanService(accessToken, id);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        dispatch(deleteStudentsPlanSuccessAction(id));
        dispatch(
          showNotificationAction({ message: 'Success delete student plan', variant: 'success' })
        );
      }
    } catch (e) {
      console.log(e);
      dispatch(deleteStudentsPlanErrorAction(e));
      dispatch(showNotificationAction({ message: 'Delete student plan failed', variant: 'error' }));
    }
  };
};

export const editStudentsPlanThunk = (student) => {
  return async (dispatch) => {
    try {
      dispatch(editStudentsPlanAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await editStudentsPlanService(accessToken, student);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        // const updatedStudent = await response.json();
        // console.log({ updatedStudent });
        dispatch(editStudentsPlanSuccessAction(student));
        dispatch(
          showNotificationAction({ message: 'Success edit student plan', variant: 'success' })
        );
      }
    } catch (e) {
      console.log(e);
      dispatch(editStudentsPlanErrorAction(e));
      dispatch(showNotificationAction({ message: 'Edit student plan failed', variant: 'error' }));
    }
  };
};
