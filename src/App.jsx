import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Grupo from "./layout/Grupo"
import "./App.css";

function App() {
  const [vista, setVista] = useState("inicio");

  const [participantes, setParticipantes] = useState([]);
  const [valorInput, setValorInput] = useState(0);

  return (
    <>
      <Header />
    {vista === "inicio" && (
  <Main
    participantes={participantes}
    setParticipantes={setParticipantes}
    valorInput={valorInput}
    setValorInput={setValorInput}
    setVista={setVista}   // 🔹 pasamos la función para cambiar vista
  />
)}

{vista === "grupo" && (
  <Grupo participantes={participantes} />
)}
    </>
  );
}

export default App;
