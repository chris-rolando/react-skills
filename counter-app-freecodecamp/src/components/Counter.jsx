import PropTypes from "prop-types";
import "../styles/counter.css";

export const Counter = ({ value }) => {
  return <p>{value}</p>;
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
