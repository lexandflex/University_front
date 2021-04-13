import { NOTIFICATION_TYPES } from '../actions/notifications';

const initialState = {
  message: '',
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_TYPES.SHOW_NOTIFICATION:
      return { ...state, message: action.payload.message, variant: action.payload.variant };
    default:
      return { ...state };
  }
};
