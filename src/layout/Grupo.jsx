import "../App.css";
function Grupo({ participantes }) {
  return (
    <>
      <section className="grupo">
        {participantes.map((p, i) => (
          <div key={i} className="card-participante">
            <h3> {p.nombre}</h3>
            <p>ID: #{i}</p>
            <button>Ingresar</button>
          </div>
        ))}
      </section>
    </>
  );
}
export default Grupo;
