import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  // Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  // Extraer de usuario
  const { email, password } = usuario;
  const guardarDatos = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  //  Cuando el usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();
    // Validar que no haya campos vacíos
    if (password.trim() === "" || email.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios.", "alerta-error");
      return;
    }
    // Pasarlo al action
    iniciarSesion({ email, password });
  };
  // En caso de que el usuario no exista o el password sea incorrecto
  useEffect(() => {
    if (autenticado) {
      props.history.push("/proyectos");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  return (
    <div className="form-usuario">
      {alerta && (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      )}
      <div className="contenedor-form sombra-dark">
        <h1 data-cy="titulo">Iniciar Sesión</h1>
        <form onSubmit={onSubmit} data-cy="form-login">
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
            <input
              data-cy="submit-login"
              type="submit"
              value="Iniciar Sesión"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link
          to={"/nueva-cuenta"}
          className="enlace-cuenta"
          data-cy="nueva-cuenta"
        >
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
