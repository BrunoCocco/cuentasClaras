import { useState } from "react";
import Modal from "./Modal";
import "../App.css";

function CardGrupo({ participantes, setParticipantes }) {
  console.log("🔍 setParticipantes:", typeof setParticipantes);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

  function abrirModal(p) {
    setSeleccionado(p);
    setModalAbierto(true);
  }

  function cerrarModal() {
    setModalAbierto(false);
    setSeleccionado(null);
  }

  function guardarGasto(gasto) {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString("es-ES");
    const hora = ahora.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const gastoConFecha = { ...gasto, fecha, hora };

    // Actualiza el participante correspondiente
    const nuevaLista = participantes.map((p) =>
      p.id === seleccionado.id
        ? {
            ...p,
            aporte: p.aporte + gasto.monto,
            historial: [...(p.historial || []), gastoConFecha],
          }
        : p
    );

    setParticipantes(nuevaLista);
    cerrarModal();
  }

  return (
    <>
      <div className="lista-grupo">
        {participantes.map((p) => (
          <div key={p.id} className="card-participante">
            <h3>{p.nombre || "Sin nombre"}</h3>
            <p>Aporte total: €{p.aporte.toFixed(2)}</p>

            {p.historial && p.historial.length > 0 && (
              <ul>
                {p.historial.map((g, i) => (
                  <li key={i}>
                    {g.fecha} {g.hora} — {g.descripcion}: €{g.monto}
                  </li>
                ))}
              </ul>
            )}

            <button onClick={() => abrirModal(p)}>Agregar gasto</button>
          </div>
        ))}
      </div>

      {modalAbierto && (
        <Modal
          key={seleccionado?.id}
          participantes={participantes.map((p) => p.nombre)}
          seleccionado={seleccionado}
          onCerrar={cerrarModal}
          onGuardar={guardarGasto}
        />
      )}
    </>
  );
}

export default CardGrupo;
