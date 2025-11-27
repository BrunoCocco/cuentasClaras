import '../App.css'
function Grupo({participantes}){
    return (
<>
<section className="grupo">
  {Array.from({ length: participantes }).map((_, i) => (
    <div key={i} className="card-participante">
      <h3>Participante {i + 1}</h3>
      <p>ID: #{i + 101}</p>
      <p>Nombre: ***</p>
      <button>Ingresar</button>
    </div>
  ))}
</section>

</>
    )
}
export default Grupo;