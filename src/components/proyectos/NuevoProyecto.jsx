import React from "react";

const NuevoProyecto = () => {
  return (
    <>
      <button className="btn btn-block btn-primario" type="button">
        Nuevo Proyecto
      </button>
      <form action="" className="formulario-nuevo-proyecto">
        <input
          type="text"
          name="nombre"
          id=""
          placeholder="Nombre proyecto"
          className="input-text"
        />
        <input
          type="submit"
          value="Agregar Proyecto"
          className="btn btn-primario btn-block"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;
