import PropTypes from "prop-types";
import styles from "./counter.module.css";

export const Counter = ({ value, styleOverride }) => {
  return (
    <p className={`${styles["counter-value"]} ${styleOverride}`}>{value}</p>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  styleOverride: PropTypes.string,
};

Counter.defaultProps = {
  styleOverride: "",
};
