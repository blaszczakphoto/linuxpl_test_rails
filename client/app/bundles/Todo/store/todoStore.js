import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import todoReducer from '../reducers/todoReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const configureStore = () => (
  createStore(todoReducer, applyMiddleware(...middlewares))
);

export default configureStore;
