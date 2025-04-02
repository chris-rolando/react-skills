import {ReviewBox} from "./components/ReviewBox/ReviewBox.tsx";
import { Title } from "./components/Title/Title.tsx";
import { reviews } from "./helpers/reviewsHelper.ts";
import "./App.css";

export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
      <Title text="Reseñas"/>
      </header>

      {reviews.map((review, index) => (
        <ReviewBox key={index} review={review} />
      ))}
    </div>
  );
}

