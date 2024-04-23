const pool = require("../db");

const getTareas = async (req, res, next) => {
  try {
    const tareas = await pool.query("SELECT * FROM tareas");

    res.json(tareas.rows);
  } catch (error) {
    next(error);
  }
};

const getTarea = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM tareas where id = $1", [id]);

    if (result.rows.length == 0) {
      res.status(404).json({
        message: "tarea no encontrada",
      });
    } else {
      console.log(result.rows);
      res.json(result.rows);
    }
  } catch (error) {
    next(error);
  }
};

const createTareas = async (req, res, next) => {
  const { titulo, descripcion } = req.body;

  const result = await pool.query(
    "INSERT INTO tareas (titulo,descripcion) VALUES ($1, $2) RETURNING *",
    [titulo, descripcion]
  );

  res.json(result.rows[0]);
};

const deleteTareas = async (req, res, next) => {
  const { id } = req.params;

  const result = await pool.query(
    "DELETE FROM tareas WHERE id = $1 RETURNING *",
    [id]
  );
  if (result.rows.length == 0) {
    res.status(404).json({
      message: "tarea no encontrada",
    });
  } else {
    return res.sendStatus(204);
  }
};

const actualizarTareas = async (req, res, next) => {
  const { id } = req.params;
  const { titulo, descripcion } = req.body;

  const result = await pool.query(
    "UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *",
    [titulo, descripcion, id]
  );
  if(result.rows.length == 0){
    res.status(404).json({message:"no se ha encontrado el id de la tarea"})  
  }else{
    console.log(result);
  
    return res.json( result.rows[0] )
  }
  
};

module.exports = {
  getTareas,
  createTareas,
  deleteTareas,
  actualizarTareas,
  getTarea,
};
