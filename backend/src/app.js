const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const {PORT} = require("./config/config")
const sequelize = require('./db/connections');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", taskRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal en el servidor" });
});

// Inicializar la base de datos y luego el servidor
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error al conectar con la base de datos:', error);
  });

module.exports = app;