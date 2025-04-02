import { useState } from "react";
import { Button } from "./components/Button/Button.jsx";
import { Counter } from "./components/Counter/Counter.jsx";
import { Title } from "./components/Title/Title.jsx";
import "./App.css";

export const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => {
    setClickCount(clickCount + 1);
  };

  const decrementCount = () => {
    setClickCount(clickCount - 1);
  };

  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <div className="App">
      <Title text="Counter App"/>
      <Counter value={clickCount} />
      <Button text="+1" isClickButton={true} handleClick={incrementCount} />
      <Button text="-1" isClickButton={true} handleClick={decrementCount} />
      <Button text="Reset" isClickButton={false} handleClick={resetCount} />
    </div>
  );
};