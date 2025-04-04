import { useState } from 'react'
import { Title } from "./components/Title/Title.tsx";
import './App.css'

export const App = () =>{
  
  return (
    <>
    {/* titulo del proyecto */}
      <header className="App-header">
      <Title text="Lista de tareas"/>
      </header>
    


    </>
  )
}