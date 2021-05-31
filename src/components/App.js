import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./menu";
import Usuarios from "./usuarios";
import Publicaciones from "./Publicaciones";

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/publicaciones/:key" component={Publicaciones} />
    </div>
  </BrowserRouter>
);

export default App;
