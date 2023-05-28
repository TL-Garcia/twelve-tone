// vendors
import { ParentComponent } from "solid-js";

// styles
import "./index.css";

export const Content: ParentComponent = ({ children }) => {
  return <div class="content">{children}</div>;
};
