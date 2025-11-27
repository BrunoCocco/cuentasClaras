import "../App.css";

function Main({ setVista, participantes, setParticipantes, valorInput, setValorInput }) {
  function setGrupo(e) {
    e.preventDefault();

    if (valorInput >= 1 && valorInput <= 10) {
      setParticipantes(valorInput);
      setVista("grupo"); // 🔹 cambia la pantalla
    } else {
      console.log("❌ Error: el número debe estar entre 1 y 10");
    }
    console.log(participantes)
  }

  return (
    <>
      <section className="formulario">
        <article>
          <h1>¿Cuántos participaremos?</h1>
          <form onSubmit={setGrupo}>
            <input
              type="number"
              placeholder="Ingrese un número"
              value={valorInput}
              onChange={(e) => setValorInput(e.target.value)} // actualiza input
            />
            <button type="submit">Comencemos</button>
          </form>
        </article>
      </section>
      <p>
        <code>Maximo 10 Personas por Grupo!</code>
      </p>
    </>
  );
}

export default Main;
