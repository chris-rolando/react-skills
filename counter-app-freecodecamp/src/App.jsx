import { useState } from "react";
import { Btn } from "./components/Btn.jsx";
import { Counter } from "./components/Counter.jsx";
import { Title } from "./components/Title.jsx";
import "./App.css";

export const App = () => {
  const [counterClic, setCounterClic] = useState(0);

  const addCounter = () => {
    setCounterClic(counterClic + 1);
  };

  const subtractCounter = () => {
    setCounterClic(counterClic - 1);
  };

  const restartCounter = () => {
    setCounterClic(0);
  };

  return (
    <div className="App">
      <Title />
      <Counter value={counterClic} />
      <Btn texto="+1" esBtnClick={true} manejarClic={addCounter} />
      <Btn texto="-1" esBtnClick={true} manejarClic={subtractCounter} />
      <Btn texto="Reiniciar" esBtnClick={false} manejarClic={restartCounter} />
    </div>
  );
};
