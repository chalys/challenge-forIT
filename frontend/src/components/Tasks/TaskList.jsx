import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de Tareas</h1>
        <Link to="/tareas/nueva" className="btn btn-primary">
          Nueva Tarea
        </Link>
      </div>

      <div className="row">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;