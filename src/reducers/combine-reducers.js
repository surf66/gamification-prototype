import { combineReducers } from 'redux';
import tasks from './task';
import notifications from './notifications';

const reducers = combineReducers({
  tasks,
  notifications
})

export default reducers;
