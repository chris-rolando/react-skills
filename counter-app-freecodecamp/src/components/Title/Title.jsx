import PropTypes from "prop-types";
import styles from "./title.module.css";

export const Title = ({ value }) => {
  return <h1 className={styles["app-title"]}>{value}</h1>; // Agrega una clase para estilos locales
};

Title.propTypes = {
  value: PropTypes.string,
};

Title.defaultProps = {
  value: "Counter App",
};
