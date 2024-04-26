import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { json } from "react-router-dom";

export const TareasForm = () => {
  const navigate = useNavigate();
  const Params = useParams();

  const [editing, setediting] = useState(false)

  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
  });

  const [cargando, setCargando] = useState(false);


  const handleChange = (e) =>
    setTarea({ ...tarea, [e.target.name]: e.target.value });



  const cargarTarea = async (id) => {
    const res = await fetch(`http://localhost:4000/tareas/`+id);
    const data = await res.json();

    setTarea({titulo: data.titulo, descripcion: data.descripcion});
    setediting(true)
    console.log(data);
    console.log(data.titulo);
  };

  useEffect(() => {
    if (Params.id) {
      cargarTarea(Params.id);
    }
  }, [Params.id]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setCargando(true);


    if (editing){
      await fetch(`http://localhost:4000/tareas/${Params.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(tarea)
      });


    }else{
      await fetch("http://localhost:4000/tareas", {
        method: "POST",
        body: JSON.stringify(tarea),
        headers: { "Content-Type": "application/json" },
      });
    }

    setCargando(false);
    navigate("/");
    console.log(dato);
  };

  return (
    <Grid
      direction="column"
      container
      alignItems="center"
      justifyContent="center"
      pt={5}
    >
      <Grid item xs={4}>
        <Card
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            {editing? "editar tarea": "crear tarea"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="escribe tu titulo"
                sx={{ display: "block", margin: "5rem 0" }}
                name="titulo"
                value={tarea.titulo}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="escribe tu descripcion"
                multiline
                rows={4}
                sx={{ display: "block", margin: "5rem 0" }}
                name="descripcion"
                value={tarea.descripcion}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!tarea.titulo || !tarea.descripcion}
              >
                {cargando ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  `${editing? "actualizar": "crear"}`
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
