import * as React from "react";

import "./Content.css";

export const Content = ({ children }: React.PropsWithChildren): JSX.Element => {
  return <div className="content">{children}</div>;
};
