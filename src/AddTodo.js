import React from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = React.useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={handleChange}
      />
      <button
        onClick={(event) => {
          setTitle('');
          onAddTodo(title, event);
        }}
      >
        Add
      </button>
    </>
  );
}
