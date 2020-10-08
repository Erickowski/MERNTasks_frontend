import React, { useReducer } from "react";
import proyectContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import { FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
    proyectos: [
      { id: 1, nombre: "Tienda Virtual" },
      { id: 2, nombre: "Intranet" },
      { id: 3, nombre: "Diseño de Sitio web" },
    ],
  };
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);
  //   Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  return (
    <proyectContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
};

export default ProyectoState;
