import React, { useState } from "react";
import "./box.css";


// il faut expliquer ce code :::
export default function Box() {
  const [tasks, setTasks] = useState([
    "Algo",
    "Analyse",
    "Algebre",
    "Physique",
    "Structure",
  ]);
  const [task, setTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); // Add task to list
      setTask(""); // Clear input field
    }
  };

  return (
    <div className="box">
      <div className="header">
        <input
          type="text"
          placeholder="Enter your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="list">
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <p>{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
