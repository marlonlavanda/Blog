import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: "",
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, usuarios: action.payload, cargando: false };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default:
      return state;
  }
};
