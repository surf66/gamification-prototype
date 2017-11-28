import { createStore } from 'redux';
import reducer from '../reducers/combine-reducers';
import DefaultTasks from '../consts/default-tasks';

let initialState = {
  tasks: DefaultTasks
}
console.log(initialState);

const store = createStore(reducer, initialState);

export default store;
