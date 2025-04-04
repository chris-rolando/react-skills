import { useState, ChangeEvent, FormEvent } from "react";

interface AddTaskProps {
  addTask: (task: string) => void;
}

export const AddTask = ({ addTask }: AddTaskProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTask(inputValue);
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="appInput"
        type="text"
        placeholder="Nueva tarea"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
