import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import Footer from '../components/Footer';

class Todos extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type todo name..."
          ref={node => this.textInput = node}
        />
        <button
          onClick={() => {
            this.props.onClick(this.textInput.value)
            this.textInput.value = null;
          }}
        >
          Add
        </button>
        <TodoListContainer />
        <Footer />
      </div>
    )
  }
}

export default Todos;
