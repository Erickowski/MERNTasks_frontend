import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;
  // State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });
  // extraer nombre del proyecto
  const { nombre } = proyecto;
  // Leer el contenido del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  //  Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    // Validar el proyecto
    if (nombre === "") return;
    // Agregar al state
    agregarProyecto(proyecto);
    // Reiniciar el form
    guardarProyecto("");
  };
  return (
    <>
      <button
        className="btn btn-block btn-primario"
        type="button"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario && (
        <form
          action=""
          className="formulario-nuevo-proyecto"
          onSubmit={onSubmitProyecto}
        >
          <input
            type="text"
            name="nombre"
            id=""
            placeholder="Nombre proyecto"
            className="input-text"
            onChange={onChangeProyecto}
            value={nombre}
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-primario btn-block"
          />
        </form>
      )}
    </>
  );
};

export default NuevoProyecto;
