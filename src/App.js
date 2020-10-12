import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/auth/authState";

import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import { tokenAuth } from "./config/tokenAuth";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AuthState>
      <AlertaState>
        <ProyectoState>
          <TareaState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <Route exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </TareaState>
        </ProyectoState>
      </AlertaState>
    </AuthState>
  );
}

export default App;
