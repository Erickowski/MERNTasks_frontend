import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

const Barra = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <div className="app-header">
      {usuario && (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      )}
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesión</a>
      </nav>
    </div>
  );
};

export default Barra;
