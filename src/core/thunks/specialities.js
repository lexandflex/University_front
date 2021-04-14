import { showNotificationAction } from '../actions/notifications';
import {
  specialitiesAction,
  specialitiesSuccessAction,
  specialitiesErrorAction,
  createSpecialitySuccessAction,
  createSpecialityAction,
  deleteSpecialityAction,
  createSpecialityErrorAction,
  deleteSpecialityErrorAction,
  editSpecialityAction,
  deleteSpecialitySuccessAction,
  editSpecialityErrorAction,
  editSpecialitySuccessAction,
} from '../actions/specialities';
import {
  getSpeciailitiesService,
  createSpecialityService,
  editSpecialityService,
  deleteSpecialityService,
} from '../services/specialities';
import { getFacultiesThunk } from './faculties';

export const getSpecialitiesThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(specialitiesAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await getSpeciailitiesService(accessToken);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const specialities = await response.json();
        dispatch(getFacultiesThunk());
        dispatch(specialitiesSuccessAction(specialities));
        dispatch(
          showNotificationAction({ message: 'Success get specialities', variant: 'success' })
        );
      }
    } catch (e) {
      dispatch(specialitiesErrorAction(e));
      dispatch(showNotificationAction({ message: 'Failed get specialities', variant: 'error' }));
    }
  };
};

export const createSpecialityThunk = (speciality) => {
  return async (dispatch) => {
    try {
      dispatch(createSpecialityAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await createSpecialityService(accessToken, speciality);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const speciality = await response.json();
        dispatch(createSpecialitySuccessAction(speciality));
        dispatch(
          showNotificationAction({ message: 'Success create speciality', variant: 'success' })
        );
      }
    } catch (e) {
      dispatch(createSpecialityErrorAction(e));
      dispatch(showNotificationAction({ message: 'Create speciality failed', variant: 'error' }));
    }
  };
};

export const deleteSpecialityThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteSpecialityAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await deleteSpecialityService(accessToken, id);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        dispatch(deleteSpecialitySuccessAction(id));
        dispatch(
          showNotificationAction({ message: 'Success delete speciality', variant: 'success' })
        );
      }
    } catch (e) {
      dispatch(deleteSpecialityErrorAction(e));
      dispatch(showNotificationAction({ message: 'Delete speciality failed', variant: 'error' }));
    }
  };
};

export const editSpecialityThunk = (speciality) => {
  return async (dispatch) => {
    try {
      dispatch(editSpecialityAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await editSpecialityService(accessToken, speciality);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        dispatch(editSpecialitySuccessAction(speciality));
        dispatch(
          showNotificationAction({ message: 'Success edit speciality', variant: 'success' })
        );
      }
    } catch (e) {
      dispatch(editSpecialityErrorAction(e));
      dispatch(showNotificationAction({ message: 'Edit speciality failed', variant: 'error' }));
    }
  };
};
