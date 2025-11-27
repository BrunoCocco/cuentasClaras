import { useState } from "react";

function Modal({  participantes, onGuardar, onCerrar }) {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [pagador, setPagador] = useState(participantes[0] || "");

function handleSubmit(e) {
  e.preventDefault();

  if (!descripcion || !monto || !pagador) return alert("Completa todos los campos");

  const nuevoGasto = {
    descripcion,
    monto: parseFloat(monto),
    pagador,
  };

  onGuardar(nuevoGasto);
  setDescripcion("");
  setMonto("");
  setPagador(participantes[0] || "");
  onCerrar();
}


  return (
    <div className="modal-fondo">
      <div className="modal-caja">
        <h3>Agregar gasto</h3>
        <form onSubmit={handleSubmit}>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ej: Cena, Taxi..."
          />

          <label>Monto (€):</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Ej: 45.50"
          />
          <div className="modal-botones">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCerrar}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
