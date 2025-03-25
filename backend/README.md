# Backend para Gestión de Tareas

Este proyecto es una API básica para la gestión de tareas, construida con Node.js, Express, Sequelize y SQLite. Proporciona endpoints para crear, leer, actualizar y eliminar tareas. 

## Configuración

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` y configura las variables de entorno.
4. Ejecuta `npm run dev` para iniciar el servidor.

## Endpoints de la API

- `POST /api/tasks`: Crear una nueva tarea.
- `GET /api/tasks`: Obtener todas las tareas.
- `PUT /api/tasks/:id`: Actualizar una tarea.
- `DELETE /api/tasks/:id`: Eliminar una tarea.