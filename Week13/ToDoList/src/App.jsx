import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setPendingTasks([...pendingTasks, task]);
      setTask('');
    }
  };

  const moveTask = (task, from, to) => {
    from((prevTasks) => prevTasks.filter((t) => t !== task));
    to((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <label>
          New Task:
          <input type="text" value={task} onChange={handleTaskChange} style={{ marginLeft: '10px' }} />
        </label>
        <button onClick={handleAddTask} style={{ marginLeft: '10px' }}>Add Task</button>
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', marginRight: '10px' }}>
          <h3>Pending</h3>
          <ul>
            {pendingTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => moveTask(task, setPendingTasks, setInProgressTasks)} style={{ marginLeft: '10px' }}>In Progress</button>
                <button onClick={() => moveTask(task, setPendingTasks, setCompletedTasks)} style={{ marginLeft: '10px' }}>Complete</button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', marginRight: '10px' }}>
          <h3>In Progress</h3>
          <ul>
            {inProgressTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => moveTask(task, setInProgressTasks, setCompletedTasks)} style={{ marginLeft: '10px' }}>Complete</button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc' }}>
          <h3>Completed</h3>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
