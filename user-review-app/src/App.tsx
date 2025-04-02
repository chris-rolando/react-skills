import {ReviewBox} from "./components/ReviewBox/ReviewBox.tsx";
import { Title } from "./components/Title/Title.tsx";
import "./App.css";

export const App = () => {
  const review = {
    text: "El servicio de esta empresa es excepcional. ¡Muy recomendado!",
    author: "Juan Pérez",
    avatar: "/images/avatar.webp", // Ruta de la imagen optimizada
  };

  return (
    <div className="App">
      <header className="App-header">
      <Title text="Reseñas"/>
      </header>

      <ReviewBox review={review} />
    </div>
  );
}

