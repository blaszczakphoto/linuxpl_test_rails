import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoList from '../components/TodoList';
import * as actions from '../actions/todosActionCreators';

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <TodoList {...this.props} />
    );
  }
}

TodoListContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Filter: ${filter} does't match any expected value.`);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.match.params.filter || 'all'),
});

const mapDispatchToProps = dispatch => ({
  onClick(id) {
    dispatch(actions.toggleTodoRequest(id));
  },
  fetchTodos() {
    dispatch(actions.fetchTodoRequest());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListContainer));
