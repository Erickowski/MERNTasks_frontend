import React, { useReducer } from "react";
import proyectContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import { FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
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
      value={{ formulario: state.formulario, mostrarFormulario }}
    >
      {props.children}
    </proyectContext.Provider>
  );
};

export default ProyectoState;
