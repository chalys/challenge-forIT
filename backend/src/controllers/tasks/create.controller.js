const Task = require("../../db/models/task");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "El titulo es requerido" });
    }
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};

module.exports = createTask;
