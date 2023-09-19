import React from 'react';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function UseReducer() {
  const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((task) => {
          if (task.id === action.newTask.id) {
            return action.newTask;
          } else {
            return task;
          }
        });
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  function handleAddTask(newTitle) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: newTitle,
    });
  }

  function handleChangeTask(newTask) {
    dispatch({
      type: 'changed',
      newTask: newTask,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onChange={handleAddTask} />
      <hr />
      <TaskList tasks={tasks} onChange={handleChangeTask} />
    </>
  );
}

function TaskList({ tasks, onChange }) {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id.toString()}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => {
              onChange({
                ...task,
                done: !task.done,
              });
            }}
          />
          {task.text}
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
          setTitle('');
        }}
      >
        Add
      </button>
    </>
  );
}
