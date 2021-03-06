import { createStore } from 'redux';
import reducer from '../reducers/combine-reducers';
import DefaultTasks from '../consts/default-tasks';

let initialState = {
  tasks: Object.assign({}, DefaultTasks)
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state);
})

export default store;
