import "./App.css";
import { BrowserRouter } from "react-router-dom";

import {Container} from '@mui/material'

import { Rutas } from "./Ruta/Rutas";
import { Header } from "./componentes/Header";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Container>
            

            <Rutas/>
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
