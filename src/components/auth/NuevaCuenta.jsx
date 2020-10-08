import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });
  // Extraer de usuario
  const { nombre, email, password, confirmar } = usuario;
  const guardarDatos = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  //  Cuando el usuario quiere iniciar sesión
  const iniciarSesion = (e) => {
    e.preventDefault();
    // Validar que no haya campos vacíos

    // Password minimo de 6 caracteres

    // Passwords iguales

    // Pasarlo al action
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        <form onSubmit={iniciarSesion}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              onChange={guardarDatos}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={guardarDatos}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={guardarDatos}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              onChange={guardarDatos}
              value={confirmar}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Registrarme"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
