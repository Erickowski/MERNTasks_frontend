import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "../proyectos/Proyecto";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //  Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto.</h2>;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de Pago", estado: false },
    { nombre: "Elegir Hosting", estado: false },
  ];
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
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
