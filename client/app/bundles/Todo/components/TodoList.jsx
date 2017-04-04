import React, { PropTypes } from 'react';

const TodoList = ({ todos, onClick }) => (
  <ul>
    {todos.map((todo) => (
      <li 
        key={todo.id}
        onClick={() => onClick(todo.id)}
        style={{textDecoration: (todo.completed) ? 'line-through' : 'none'}}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

export default TodoList;