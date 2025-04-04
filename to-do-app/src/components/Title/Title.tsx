import styles from "./title.module.css";

interface TitleProps {
  text?: string;
  styleOverride?: string;
}

export const Title = ({
  text = "Todo App",
  styleOverride = "",
}: TitleProps) => {
  return <h1 className={`${styles["app-title"]} ${styleOverride}`}>{text}</h1>;
};
