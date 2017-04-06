import { v4 } from 'uuid';
import * as constants from '../constants/todosConstants';

export const addTodo = (text, id) => ({
  type: constants.TODOS_ADD_TODO,
  id: v4(),
  completed: false,
  text,
});

export const addTodoRequest = text => (dispatch) => {
  const id = v4();
  dispatch(addTodo(text, id));
  fetch('/api/v1/todos', { //eslint-disable-line
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ text, id, completed: false }),
  });
};

export const toggleTodo = id => ({
  type: constants.TODOS_TOGGLE_TODO,
  id,
});

export const toggleTodoRequest = id => (dispatch, getState) => {
  const todoForToggling = getState().todos.find(todo => todo.id === id);
  const nextCompletedState = !todoForToggling.completed;
  fetch(`/api/v1/todos/${id}`, { //eslint-disable-line
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({ completed: nextCompletedState }),
  });
  dispatch(toggleTodo(id));
};

export const fetchTodoRequest = () => (dispatch) => {
  fetch('/api/v1/todos')  // eslint-disable-line
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: 'TODOS_FETCH_TODOS_SUCCESS',
        response,
      });
    });
};
