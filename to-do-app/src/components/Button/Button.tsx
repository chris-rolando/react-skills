interface ButtonProps {
  textoButton: string;
  eventClic: () => void;
}

export const Button = ({ textoButton, eventClic }: ButtonProps) => {
  return (
    <button className="boton-1" onClick={eventClic}>
      {textoButton}
    </button>
  );
};

Button.defaultProps = {
  textoButton: "Botón"
};
