export const NOTIFICATION_TYPES = {
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
};

export const showNotificationAction = (payload) => {
  return {
    type: NOTIFICATION_TYPES.SHOW_NOTIFICATION,
    payload: payload,
  };
};
