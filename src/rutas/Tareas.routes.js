const {Router} = require("express");
const { getTareas, createTareas, deleteTareas, actualizarTareas, getTarea } = require("../controles/Tareas.controler")

const pool = require("../db.js");
const router = Router();

router.get('/tareas', getTareas);

router.post("/tareas", createTareas);

router.delete("/tareas/:id", deleteTareas);

router.put("/tareas/:id", actualizarTareas );

router.get("/tareas/:id", getTarea );

module.exports = router;
