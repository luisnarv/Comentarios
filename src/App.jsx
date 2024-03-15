import { Fragment, useState } from "react";
import { useComments } from "./context/commentContext";

function getDate() {
  let fechaActual = new Date();

  // Obtener los componentes de la fecha
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
  let año = fechaActual.getFullYear();
  return dia + "/" + mes + "/" + año;
}

export default function App() {
  const { comments, addComment } = useComments();
  const [newComment, setNewComment] = useState({
    id: 4,
    name: "",
    comment: "",
    start: 4,
    respuestas: [],
    fecha: "2024-03-15",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setNewComment({ ...newComment, fecha: getDate() });

    addComment(newComment);
  }

  //datos del comentario
  //nombre, texto, fecha, responder, likes, editar
  return (
    <div>
      <section className="boxComment">
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={(e) => {
              setNewComment({ ...newComment, name: e.target.value });
            }}
          />

          <textarea
            placeholder="Agrega tu comentario"
            autoCapitalize="sentences"
            spellCheck="true"
            wrap="hard"
            name="comment"
            onChange={(e) => {
              setNewComment({ ...newComment, comment: e.target.value });
            }}
            cols="70"
            rows="4"
          ></textarea>
          <div>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <button type="submit"></button>
        </form>
      </section>

      <div>
        {comments &&
          comments.map((e) => (
            <Fragment key={e.id}>
              <div>
                <h3>{e.name}</h3>
                <span>{e.start}</span>
              </div>
              <p>{e.comment}</p>
              <span>{e.fecha}</span>
              <br />
              <span>Responder</span>
            </Fragment>
          ))}
      </div>
    </div>
  );
}
