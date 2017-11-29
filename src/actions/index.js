export const completeTask = (value) => ({
  type: 'COMPLETE_TASK',
  value
});

export const setNotification = (value) => ({
  type: 'SET_NOTIFICATION',
  value
});

export const clearNotification = () => ({
  type: 'CLEAR_NOTIFICATION'
});