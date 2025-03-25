const router = require("express").Router();
const { list, update, create, detete } = require("../controllers/tasks");

router.get("/tasks", list);
router.post("/tasks", create);
router.put("/tasks/:id", update);
router.delete("/tasks/:id", detete);

module.exports = router;
