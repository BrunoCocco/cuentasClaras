import { useEffect } from "react";
import "../App.css";

function Main({
  setVista,
  participantes,
  setParticipantes,
  valorInput,
  setValorInput,
}) {
  // 🔹 Genera automáticamente los campos según el número ingresado
  useEffect(() => {
    if (valorInput >= 1 && valorInput <= 10) {
      const nuevos = Array.from({ length: valorInput }, (_, i) => ({
        id: i + 1,
        nombre: "",
        aporte: 0,
      }));
      setParticipantes(nuevos);
    } else {
      setParticipantes([]); // si se borra o sale del rango, limpia
    }
  }, [valorInput]);

  // 🔹 Actualiza los nombres en el array
  function actualizarNombre(index, nuevoNombre) {
    const copia = [...participantes];
    copia[index].nombre = nuevoNombre;
    setParticipantes(copia);
  }

  // 🔹 Envía el formulario
  function setGrupo(e) {
    e.preventDefault();

    if (valorInput < 1 || valorInput > 10) {
      console.log("❌ Error: el número debe estar entre 1 y 10");
      return;
    }

    const incompletos = participantes.some((p) => p.nombre.trim() === "");
    if (incompletos) {
      console.log("⚠️ Faltan nombres");
      return;
    }
    setVista("grupo"); // cambia la pantalla
  }

  return (
    <>
      <section className="formulario">
        <article>
          <h1>¿Cuántos participaremos?</h1>

          <form onSubmit={setGrupo}>
            {/* Input de cantidad */}
            <input
              type="number"
              placeholder="Ingrese un número (1–10)"
              value={valorInput}
              onChange={(e) => setValorInput(Number(e.target.value))}
            />

            {/* Inputs de nombres dinámicos */}
            {participantes.map((p, i) => (
              <input
                key={p.id}
                type="text"
                placeholder={`Nombre del participante ${p.id}`}
                value={p.nombre}
                onChange={(e) => actualizarNombre(i, e.target.value)}
              />
            ))}

            {/* Botón final */}
            <button type="submit">Comencemos</button>
          </form>
        </article>
      </section>

      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        <code>Máximo 10 personas por grupo.</code>
      </p>
    </>
  );
}

export default Main;
