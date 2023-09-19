import React from 'react';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function UseReducer() {
  const [todos, setTodos] = React.useState(initialTasks);

  function handleAddTask(newTitle) {
    console.log(newTitle);
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: newTitle,
        done: false,
      },
    ]);
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onChange={handleAddTask} />
      <hr />
      <TaskList todos={todos} />
    </>
  );
}

function TaskList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <input type="checkbox" checked={todo.done} />
          {todo.text}
        </li>
      ))}
    </>
  );
}

function AddTask({ onChange }) {
  const [title, setTitle] = React.useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          onChange(title);
        }}
      >
        Add
      </button>
    </>
  );
}
