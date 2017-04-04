import * as constants from '../constants/todosConstants';
import { v4 } from 'uuid';

export const addTodo = (text) => ({
  type: constants.TODOS_ADD_TODO,
  id: v4(),
  completed: false,
  text,
})