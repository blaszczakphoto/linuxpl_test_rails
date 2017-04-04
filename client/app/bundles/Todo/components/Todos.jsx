import React from 'react';

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
          onClick={() => { this.props.onClick(this.textInput.value) }}
        >
          Add
        </button>
      </div>
    )
  }
}

export default Todos;
