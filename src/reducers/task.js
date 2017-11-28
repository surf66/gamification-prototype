const task = (state = {}, action) => {
  switch (action.type) {
    case 'COMPLETE_TASK':
      return action.value;
    default:
      return state;
  }
}

export default task;
