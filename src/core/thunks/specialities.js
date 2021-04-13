import { showNotificationAction } from '../actions/notifications';
import {
  specialitiesAction,
  specialitiesSuccessAction,
  specialitiesErrorAction,
} from '../actions/specialities';
import { getSpeciailitiesService } from '../services/specialities';

export const getSpecialitiesThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(specialitiesAction());
      const accessToken = localStorage.getItem('access_token');
      const response = await getSpeciailitiesService(accessToken);
      console.log({ response });
      if (response.status >= 400) {
        throw response.statusText;
      } else {
        const specialities = await response.json();
        console.log({ specialities });
        dispatch(specialitiesSuccessAction(specialities));
        dispatch(
          showNotificationAction({ message: 'Success get specialities', variant: 'success' })
        );
      }
    } catch (e) {
      console.log(e);
      dispatch(specialitiesErrorAction(e));
      dispatch(showNotificationAction({ message: 'Failed get specialities', variant: 'error' }));
    }
  };
};
