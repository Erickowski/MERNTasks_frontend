import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de Pago", estado: false },
    { nombre: "Elegir Hosting", estado: false },
  ];
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button className="btn btn-eliminar" type="button">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
