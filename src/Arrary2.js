import React from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

let nextID = initialTodos.length;

export default function Arrary2() {
  const [todos, setTodos] = React.useState(initialTodos);

  function handleAddTodo(title, event) {
    console.log(title);
    console.log(event.target);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo}></AddTodo>
      <TaskList todos={todos}></TaskList>
    </>
  );
}
