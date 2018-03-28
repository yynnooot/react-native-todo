import { createStore } from 'redux';

const defaultState = {
  todos: [
    {
      task: 'learn react native'
    },
  ],
};

function todoStore(state = defaultState, action){
  switch (action.type){
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat([{
          task: action.task
        }])
      })
    case 'DONE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo !== action.todo)
      })
    default: 
      return state;
  }
}

export default createStore(todoStore)