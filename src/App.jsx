export default function App() {
  //datos del comentario
  //nombre, texto, fecha, responder, likes, editar
  return (
    <div>
      <section>
        <div>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <textarea name="comment" id="" cols="30" rows="10"></textarea>

        <button>Publicar</button>
      </section>

      <div>
        <div>
          <h3>@usuario</h3>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odio
          veritatis dolorum, minima eius itaque sequi sit ullam repellendus
          totam ea voluptatum? Cum iste dignissimos vel sequi. Dignissimos,
          natus enim?
        </p>
        <span>Responder</span>
      </div>
    </div>
  );
}
