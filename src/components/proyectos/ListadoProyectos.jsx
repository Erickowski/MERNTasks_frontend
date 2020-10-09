import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Proyecto from "./Proyecto";

import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;
  // Validar que haya proyectos existentes
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);
  if (proyectos.length === 0) return <p>No hay proyectos aún.</p>;
  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} classNames="proyecto" timeout={200}>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
