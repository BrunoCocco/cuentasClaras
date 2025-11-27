import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Grupo from "./layout/Grupo";
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
          setVista={setVista}
        />
      )}

      {vista === "grupo" && (
        <Grupo
          participantes={participantes}
          setParticipantes={setParticipantes} // ✅ ESTA LÍNEA ES CLAVE
        />
      )}

      <Footer participantes={participantes} />
    </>
  );
}

export default App;
