import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import todoReducer from '../reducers/todoReducer';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const preloadedState = {
  todos: [
    {
      id: '1',
      completed: true,
      text: 'Zrobić kupe!',
    },
    {
      id: '2',
      completed: false,
      text: 'Zjeść śniadanie!',
    },
  ],
};

const configureStore = () => (
  createStore(todoReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;
