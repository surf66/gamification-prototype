const task = (state = {}, action) => {
  switch (action.type) {
    case 'COMPLETE_TASK':
      return Object.assign({}, state, {[action.value]: true});
    case 'UNCOMPLETE_TASK':
      return Object.assign({}, state, {[action.value]: false});
    default:
      return state;
  }
}

export default task;
