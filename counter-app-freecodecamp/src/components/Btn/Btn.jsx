import PropTypes from "prop-types";
import styles from "./btn.module.css";

export function Btn({ texto, esBtnClick, manejarClic }) {
  return (
    <button
      className={esBtnClick ? styles["boton-clic"] : styles["boton-reiniciar"]}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

Btn.propTypes = {
  texto: PropTypes.string.isRequired,
  esBtnClick: PropTypes.bool,
  manejarClic: PropTypes.func.isRequired,
};

Btn.defaultProps = {
  texto: "+1",
};
