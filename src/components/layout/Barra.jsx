import React from "react";

const Barra = () => {
  return (
    <div className="app-header">
      <p className="nombre-usuario">
        Hola <span>Erick</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesión</a>
      </nav>
    </div>
  );
};

export default Barra;
