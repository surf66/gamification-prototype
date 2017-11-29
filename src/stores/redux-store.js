import { createStore } from 'redux';
import reducer from '../reducers/combine-reducers';
import DefaultTasks from '../consts/default-tasks';

let initialState = {
  tasks: Object.assign({}, DefaultTasks)
}

const store = createStore(reducer, initialState);

export default store;
