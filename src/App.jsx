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
      <section>
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={(e) => {
              setNewComment({ ...newComment, name: e.target.value });
            }}
          />
          <textarea
            name="comment"
            id="comment"
            onChange={(e) => {
              setNewComment({ ...newComment, comment: e.target.value });
            }}
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit">Publicar</button>
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
