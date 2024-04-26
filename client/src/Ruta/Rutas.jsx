import { Routes, Route } from "react-router-dom";

import { Navegacion } from "../componentes/Navegacion";
import { ListarTareas } from "../componentes/ListarTareas";
import { TareasForm } from "../componentes/TareasForm";

export const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path="/nav" element={<Navegacion />} />

        <Route path="/" element={<ListarTareas/>}></Route>

        <Route path="/tareas/form" element={<TareasForm/>}></Route>

        <Route path="/tareas/:id/edit" element={<TareasForm/>}/>
      </Routes>
    </div>
  );
}