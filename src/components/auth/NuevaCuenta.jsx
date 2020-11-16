import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/auth/authContext";

const NuevaCuenta = (props) => {
  // Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
  useEffect(() => {
    if (autenticado) {
      props.history.push("/proyectos");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

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
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios.", "alerta-error");
      return;
    }

    // Password minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "El password debe ser de al menos 6 caracteres.",
        "alerta-error"
      );
      return;
    }

    // Passwords iguales
    if (password !== confirmar) {
      mostrarAlerta("Los passwords no coinciden.", "alerta-error");
      return;
    }

    // Pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };
  return (
    <div className="form-usuario">
      {alerta && (
        <div data-cy="alerta" className={`alerta ${alerta.categoria}`}>
          {alerta.msg}
        </div>
      )}
      <div className="contenedor-form sombra-dark">
        <h1 data-cy="titulo">Obtener una cuenta</h1>
        <form onSubmit={iniciarSesion} data-cy="nueva-cuenta">
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              data-cy="nombre-input"
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
              data-cy="email-input"
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
              data-cy="password-input"
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
              data-cy="confirmar-input"
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
              data-cy="submit-nueva-cuenta"
              type="submit"
              value="Registrarme"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta" data-cy="enlace-login">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
