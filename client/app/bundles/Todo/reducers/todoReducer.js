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
      ];
    case constants.TODOS_TOGGLE_TODO:
      return state.map((t) => {
        if (t.id !== action.id) {
          return t;
        }
        return {
          ...t,
          completed: !t.completed,
        };
      });
    case constants.TODOS_FETCH_TODOS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

const todoReducer = combineReducers({ todos });

export default todoReducer;
