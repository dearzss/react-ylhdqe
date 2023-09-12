import React from 'react';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function Arrary2() {
  const [todos, setTodos] = React.useState(initialTodos);
  const [title, setTitle] = React.useState('');

  function handleAddTodo(title, e) {
    if (title !== null && title !== undefined && title.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: initialTodos.length++,
          title: title,
          done: false,
        },
      ]);
      setTitle('');
    } else {
      console.log('cannot be null');
    }
  }

  function handleChange(newTodo, event) {
    console.log(newTodo.id);
    setTodos(
      todos.map((todo) => {
        if (newTodo.id === todo.id) {
          return newTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDelete(todoID) {
    setTodos(todos.filter((t) => t.id !== todoID));
  }

  return (
    <>
      <input
        type="text"
        value={title}
        placeholder="Add todo"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          handleAddTodo(title, e);
        }}
      >
        Add
      </button>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => {
              handleChange({ ...todo, done: e.target.checked }, e);
            }}
          />
          <Task todo={todo} />
          <button
            onClick={(e) => {
              handleDelete(todo.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

function Task(todo) {
  console.log(todo);
  const [isEditing, setIsEditing] = React.useState(true);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input type="text" value={todo.title} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(false)}>Edit</button>
      </>
    );
  }

  return <label>{todoContent}</label>;
}
