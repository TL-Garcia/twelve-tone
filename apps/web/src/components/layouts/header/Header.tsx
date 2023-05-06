import * as React from "react";

import "./index.css";

export const Header = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">{children}</h1>
    </header>
  );
};
