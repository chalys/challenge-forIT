import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`)
        .then((res) => res.json())
        .then((data) => setTask(data));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id
      ? `${import.meta.env.VITE_API_URL}/tasks/${id}`
      : `${import.meta.env.VITE_API_URL}/tasks`;

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then(() => navigate("/tareas"))
      .catch((error) => console.error("Error:", error));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">{id ? "Editar" : "Nueva"} Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={handleChange}
            className="form-check-input"
          />
          <label className="form-check-label">Completada</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;