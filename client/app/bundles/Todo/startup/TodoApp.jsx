import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import TodosContainer from '../containers/TodosContainer';
import configureStore from '../store/todoStore';

const TodoApp = props => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={TodosContainer} />
        <Route path="/:filter" component={TodosContainer} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default TodoApp;
