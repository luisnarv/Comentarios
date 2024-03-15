/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

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
  comments: [
    {
      id: 2,
      name: "Usuario2",
      comment:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odio veritatis dolorum, minima eius itaque sequi sit ullam repellendus totam ea voluptatum? Cum iste dignissimos vel sequi. Dignissimos, natus enim?",
      start: 4,
      respuestas: [],
      fecha: "2024-03-14",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "comment/add": {
      const commentS = [...state.comments];
      commentS.push(action.payload);
      return { ...state, comments: commentS };
    }

    default:
      break;
  }
}

function CommentProvider({ children }) {
  const [{ comments }, dispatch] = useReducer(reducer, initialState);

  function addComment(comment) {
    dispatch({ type: "comment/add", payload: comment });
  }

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
}

function useComments() {
  const comment = useContext(CommentContext);
  if (!comment) throw new Error("Hay un error en CommentContext");
  return comment;
}

export { CommentProvider, useComments };
