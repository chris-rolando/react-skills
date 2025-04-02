import PropTypes from "prop-types";
import styles from "./title.module.css";

export const Title = ({ text, styleOverride }) => {
  return <h1 className={`${styles["app-title"]} ${styleOverride}`}>{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string,
  styleOverride: PropTypes.string,
};

Title.defaultProps = {
  text: "Counter App",
  styleOverride: "",
};
