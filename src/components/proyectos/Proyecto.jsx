import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  //   Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;
  //   Función para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    // Fijar un proyecto actual
    proyectoActual(id);
    // Filtrar las tareas cuando den click
    obtenerTareas(id);
  };
  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
