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
    if (title !== undefined && title !== null && title.trim() !== '') {
      const insertAt = 2; // Could be any index
      const newTodos = [
        ...todos.slice(0, insertAt),
        {
          id: nextID++,
          title: title,
          done: false,
        },
        ...todos.slice(insertAt),
      ];
      setTodos(newTodos);
    } else {
      console.log('cannot be null');
    }
  }

  function handleChangeTodo(nextTodo) {
    console.log(nextTodo);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo}></AddTodo>
      <TaskList todos={todos} onChangeTodo={handleChangeTodo}></TaskList>
    </>
  );
}
