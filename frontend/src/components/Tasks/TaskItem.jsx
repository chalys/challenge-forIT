import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <div className="d-flex justify-content-between">
            <span className={`badge ${task.completed ? "bg-success" : "bg-warning"}`}>
              {task.completed ? "Completada" : "Pendiente"}
            </span>
            <div>
              <Link to={`/tareas/editar/${task.id}`} className="btn btn-sm btn-info mx-1">
                Editar
              </Link>
              <button onClick={() => onDelete(task.id)} className="btn btn-sm btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;