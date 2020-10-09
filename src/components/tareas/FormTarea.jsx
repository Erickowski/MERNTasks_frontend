import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // Extraer proyecto activo de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const {
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
  } = tareasContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  // Extraer el nombre de la tarea
  const { nombre } = tarea;

  //  Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    // Obtener y filtrar tareas del proyecto id
    obtenerTareas(proyectoActual.id);

    // Reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Tarea..."
            id=""
            className="input-text"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value="Agregar Tarea"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
      {errortarea && (
        <p className="mensaje error">El nombre de la tarea es obligatorio.</p>
      )}
    </div>
  );
};

export default FormTarea;
