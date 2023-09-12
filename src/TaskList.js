import React from 'react';

export default function TaskList({ todos, onChangeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo}></Task>
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange }) {
  return (
    <lable>
      <input
        type="checkbox"
        checked={todo.done}
        value={todo.title}
        onChange={(e) => {
          onChange({
            ...todo,
            title: e.target.checked,
          });
        }}
      ></input>
    </lable>
  );
}
