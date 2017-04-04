import { createStore, applyMiddleware } from 'redux';
import todoReducer from '../reducers/todoReducer';

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const configureStore = (railsProps) => (
  createStore(todoReducer, applyMiddleware(...middlewares))
);

export default configureStore;
