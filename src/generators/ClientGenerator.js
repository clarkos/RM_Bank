import ClientsGen from "../generators/Client";
import { useState } from "react";
import { saveAs } from "file-saver";

export const Home = () => {
  const [valor, setValor] = useState("");

  const createFile = () => {
    const blob = new Blob([valor], { type: "text/plain:charset=utf-8" });
    saveAs(blob, "data.txt");
  };

  let temp = "";
  const handleClick = () => {
    temp = ClientsGen();
  };

  return (
    <div className="main-container">
      <div className="content-wrap">
        <span>un contenido dentro del home</span>
        <br />
        <button onClick={handleClick}> crear clientes </button>{"   "}|{"   "}
        <button onClick={createFile}>Cargar CLientes</button>
        <br />
        <textarea
          name="muestra"
          cols={150}
          rows={50}
          value={temp}
          onChange={(e) => setValor(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
