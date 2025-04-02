import PropTypes from "prop-types";
import styles from "./button.module.css";

export function Button({ text, isClickButton, handleClick, styleOverride }) {
  const buttonStyle = isClickButton
    ? styles["click-button"]
    : styles["reset-button"];

  return (
    <button
      className={`${styles.button} ${buttonStyle} ${styleOverride}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isClickButton: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  styleOverride: PropTypes.string,
};

Button.defaultProps = {
  text: "+1",
  styleOverride: "",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isClickButton: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  styleOverride: PropTypes.string,
};

Button.defaultProps = {
  text: "+1",
  styleOverride: "",
};
