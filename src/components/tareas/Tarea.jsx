import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    guardarTareaActual,
    actualizarTarea,
  } = tareasContext;

  // Extraer el proyecto
  const [proyectoActual] = proyecto;

  // Función que se ejecuta cuando el usuario presenta el btn de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual._id);
  };

  // Función que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };

  // agrega una tarea actual cuando el usuario dese editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li data-cy="tarea" className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            data-cy="tarea-completa"
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            data-cy="tarea-incompleta"
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          data-cy="btn-editar"
          className="btn btn-primario"
          type="button"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          data-cy="btn-eliminar"
          className="btn btn-secundario"
          type="button"
          onClick={() => tareaEliminar(tarea._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
