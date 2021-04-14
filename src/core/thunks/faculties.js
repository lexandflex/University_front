import { showNotificationAction } from '../actions/notifications';
import {
  facultiesAction,
  facultiesSuccessAction,
  facultiesErrorAction,
} from '../actions/faculties';
import { getFacultiesService } from '../services/faculties';

export const getFacultiesThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(facultiesAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await getFacultiesService(accessToken);
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const faculties = await response.json();
        dispatch(facultiesSuccessAction(faculties));
        dispatch(showNotificationAction({ message: 'Success get faculties', variant: 'success' }));
      }
    } catch (e) {
      dispatch(facultiesErrorAction(e));
      dispatch(showNotificationAction({ message: 'Failed get faculties', variant: 'error' }));
    }
  };
};
