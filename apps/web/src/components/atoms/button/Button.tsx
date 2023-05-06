import "./index.css";

export const Button = ({
  onClick,
  text,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};
