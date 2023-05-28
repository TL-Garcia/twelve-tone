// vendors
import { JSX } from "solid-js/h/jsx-runtime";

// styles
import "./index.css";

export const Button = ({
  onClick,
  text,
}: {
  onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
  text: string;
}) => {
  return (
    <button onClick={onClick} class="button">
      {text}
    </button>
  );
};
