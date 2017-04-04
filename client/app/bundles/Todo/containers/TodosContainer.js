import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions/todosActionCreators';

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  onClick: (text) => {
    dispatch(actions.addTodo(text));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
