import PropTypes from "prop-types";
import styles from "./counter.module.css";

export const Counter = ({ value }) => {
  return <p className={styles["counter-value"]}>{value}</p>;
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
