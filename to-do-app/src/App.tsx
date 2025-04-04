import { useState } from "react";
import { Title } from "./components/Title/Title";
import { AddTask } from "./components/AddTask/AddTask";
import { Button } from "./components/Button/Button";
import "./App.css";

// Crear item (fila)
interface ItemProps {
  idItem: number;
  nameItem: string;
  stateItem: boolean;
}

const Item = ({ idItem, nameItem, stateItem }: ItemProps) => {
  return (
    <label>
      {idItem} {nameItem} {stateItem && "✔️"}
    </label>
  );
};

// Lista de tareas pre-cargadas
const inicialList = [
  { id: 1, name: "Crear lista de tareas", state: true },
  { id: 2, name: "Guardar listas en formato .txt", state: false },
  { id: 3, name: "Utilizar archivo auxiliar para guardar estas tareas pre-cargadas", state: false },
  { id: 4, name: "Mejorar la UI/UX", state: false }
];

export const App = () => {
  // Crear lista de tareas
  const [toDoList, setToDoList] = useState(inicialList);

  // Evento que agrega tareas
  const onAddTask = (value: string) => {
    // eliminar espacios en blanco
    const aux = value.trim();

    // Controlar texto vacío
    if (aux.length < 1) return;

    // 1. Crear nueva tarea (1/2)
    const newTask = {
      id: toDoList.length + 1,
      name: aux,
      state: false,
    };

    // 2. Agregar tarea a la lista (2/2)
    setToDoList([...toDoList, newTask]);
  };

  // Evento que elimina tarea
  const onDeleteTask = (value: number) => {
    console.log(`onDeleteTask: ${value}`);
    setToDoList(toDoList.filter((item) => item.id !== value));
  };

  return (
    <>
      {/* Título del proyecto */}
      <header className="App-header">
        <Title text="Lista de tareas" />
      </header>

      {/* Tarea / cuadro de texto */}
      <AddTask addTask={onAddTask} />

      <hr />
      {/* Lista de pendientes */}
      <ol>
        {toDoList.map((item) => (
          <li key={item.id}>
            <div className="containerByLine">
              <Item
                idItem={item.id}
                nameItem={item.name}
                stateItem={item.state}
              />
              <Button textoButton="-" eventClic={() => onDeleteTask(item.id)} />
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
