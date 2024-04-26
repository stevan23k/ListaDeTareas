import { useEffect, useState } from "react";

import { Card, CardContent, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
export const ListarTareas = () => {
    const navigate = useNavigate();
  
    const handleDelete = async (id) => {
        console.log(id)
        
        await fetch(`http://localhost:4000/tareas/${id}` ,{
            method: "DELETE",
        })
        
        setTareas( tareas.filter((tareas)=> tareas.id != id )); 
    }
  
    const [tareas, setTareas] = useState([]);



  const cargandoTareas = async () => {
    const response = await fetch("http://localhost:4000/tareas");
    const data = await response.json();

    setTareas(data);
  };

  useEffect(() => {
    cargandoTareas();
  }, []);

  return (
    <>
      <h1>lista de tareas</h1>
      {tareas.map((tareas) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={tareas.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{color:"white"}}>
              <Typography>{tareas.titulo}</Typography>
              <Typography>{tareas.descripcion}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tareas/${tareas.id}/edit`)}
                
              >
                edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(tareas.id)}

                style={{
                    marginLeft: ".7rem"
                }}
              >
                delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
