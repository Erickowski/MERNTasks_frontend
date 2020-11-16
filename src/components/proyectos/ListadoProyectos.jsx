import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Proyecto from "./Proyecto";

import proyectoContext from "../../context/proyectos/proyectoContext";
import AlertaContext from "../../context/alertas/alertaContext";

const ListadoProyectos = () => {
  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  // Validar que haya proyectos existentes
  useEffect(() => {
    // Si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);
  if (proyectos.length === 0) return <p>No hay proyectos aún.</p>;
  return (
    <ul data-cy="listado-proyectos" className="listado-proyectos">
      {alerta && (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      )}
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} classNames="proyecto" timeout={200}>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
