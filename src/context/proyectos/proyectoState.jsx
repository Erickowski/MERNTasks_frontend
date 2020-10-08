import React, { useReducer } from "react";
import proyectContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de Sitio web" },
  ];
  const initialState = {
    formulario: false,
    proyectos: [],
  };
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);
  //   Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  //   Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };
  return (
    <proyectContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
};

export default ProyectoState;
