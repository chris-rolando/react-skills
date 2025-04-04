import { useState, ChangeEvent, FormEvent } from "react";

export const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="appInput"
        type="text"
        placeholder="agregar tarea"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
