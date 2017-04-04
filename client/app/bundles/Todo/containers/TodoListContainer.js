import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as actions from '../actions/todosActionCreators';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onClick(id) {
    dispatch(actions.toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
