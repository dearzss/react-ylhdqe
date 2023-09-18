import React from 'react';
import { useDebugValue } from 'react';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

let init = 3;

export default function Arrary2() {
  const [todos, setTodos] = React.useState(initialTodos);
  const [title, setTitle] = React.useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleChange(newTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDelClick(productId) {
    setTodos(todos.filter((todo) => todo.id !== productId));
  }

  return (
    <>
      <input
        type="text"
        placeholder=" Add todo"
        value={title}
        name="title"
        onChange={handleTitleChange}
      />
      <button
        onClick={() => {
          if (title !== null && title !== undefined && title.trim() !== '') {
            setTodos([
              ...todos,
              {
                id: init++,
                title: title,
                done: false,
              },
            ]);
          } else {
            console.log('cannot be null');
          }
          setTitle('');
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id.toString()}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => {
                handleChange({ ...todo, done: e.target.checked });
              }}
            />
            <Task todo={todo} onChange={handleChange} />
            <button
              onClick={(e) => {
                handleDelClick(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Task({ todo, onChange }) {
  const [isEditing, setIsEditing] = React.useState(false);
  useDebugValue(isEditing ? 'ture' : 'false');
  if (isEditing) {
    return (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    return (
      <>
        {todo.title}
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }
}
