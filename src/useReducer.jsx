import React from 'react';
import { Button } from 'react-bootstrap';

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
            id: action.payload.id,
            text: action.payload.text,
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
      case 'deleted': {
        return tasks.filter((task) => task.id !== action.delTaskId);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  function handleAddTask(newTitle) {
    dispatch({
      type: 'added',
      payload: {
        id: nextId++,
        text: newTitle,
      },
    });
  }

  function handleChangeTask(newTask) {
    dispatch({
      type: 'changed',
      newTask: newTask,
    });
  }

  function handleDelTask(taskId) {
    dispatch({
      type: 'deleted',
      delTaskId: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onChange={handleAddTask} />
      <hr />
      <TaskList
        tasks={tasks}
        onChange={handleChangeTask}
        onDelete={handleDelTask}
      />
    </>
  );
}

function TaskList({ tasks, onChange, onDelete }) {
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
          <Task task={task} onChange={onChange} />
          <button
            onClick={() => {
              onDelete(task.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

function Task({ task, onChange }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(task.text);

  if (isEditing) {
    return (
      <>
        <input
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            onChange({
              ...task,
              text: newText,
            });
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
        <label>{task.text}</label>
        <button
          disabled={task.done}
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
