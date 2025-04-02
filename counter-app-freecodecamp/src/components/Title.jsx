import PropTypes from "prop-types";
import "../styles/title.css";

export const Title = ({ value }) => {
  return <h1 className="app-title">{value}</h1>; // Agrega una clase para estilos locales
};

Title.propTypes = {
  value: PropTypes.string,
};

Title.defaultProps = {
  value: "Counter App",
};
