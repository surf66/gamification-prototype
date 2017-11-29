const notifications = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.value;
    case 'CLEAR_NOTIFICATION':
      return null;
    default:
      return state;
  }
}

export default notifications;