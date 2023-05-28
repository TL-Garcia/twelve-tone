import "./index.css";

export const Header = ({ children }: {children: string}) => {
  return (
    <header class="header">
      <h1 class="header__title">{children}</h1>
    </header>
  );
};
