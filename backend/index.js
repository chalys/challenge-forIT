const app = require("./src/app");
const {PORT} = require("./src/config/config")

app.listen(PORT, () => {
  console.log(`Servidor iniciado en NODE: http://localhost:${PORT}`);
});