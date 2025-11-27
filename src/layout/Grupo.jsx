import CardGrupo from "./CardGrupo";


function Grupo({ participantes, setParticipantes }) {
  return (
    <section>
      <CardGrupo
        participantes={participantes}
        setParticipantes={setParticipantes} // ✅ DEBE REENVIARSE
      />
    </section>
  );
}

export default Grupo;
