import React from 'react';
import TodosContainer from '../containers/TodosContainer';
import configureStore from '../store/todoStore';
import { Provider } from 'react-redux'; 

const TodoApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <TodosContainer />
  </Provider>
);

export default TodoApp;
