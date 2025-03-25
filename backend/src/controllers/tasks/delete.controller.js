const Task = require("../../db/models/task");

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    await task.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};

module.exports = deleteTask;
