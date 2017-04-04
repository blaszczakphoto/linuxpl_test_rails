import { combineReducers } from 'redux';
import * as constants from '../constants/todosConstants';

const todos = (state = [], action) => {
  switch (action.type) {
    case constants.TODOS_ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed,
        },
      ]
    default:
      return state;
  }
}

const todoReducer = combineReducers({ todos });

export default todoReducer;
