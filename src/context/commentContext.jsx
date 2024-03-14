/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const CommentContext = createContext();

// comment1: {
//     id:1,
//     name: "Usuario1",
//     comentario: "Este es un comentario",
//     calificación: 4,
//     respuestas: [],
//     fecha: "2024-03-14"
//   },
//   comment2: {
//     id:2,
//     name: "Usuario2",
//     comentario: "Otro comentario",
//     calificación: 5,
//     respuestas: [],
//     fecha: "2024-03-15"
//   }
const initialState = {
  1: {
    id: 2,
    name: "Usuario2",
    comentario: "Otro comentario",
    calificación: 5,
    respuestas: [],
    fecha: "2024-03-15",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "comment/add": {
      return "hola";
    }

    default:
      break;
  }
}

function CommentProvider({ children }) {
  const [comments, dispatch] = useReducer(reducer, initialState);

  function addComment(id, comment) {
    dispatch({ type: "add", payload: { id, comment } });
  }

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
}

export { CommentProvider };
