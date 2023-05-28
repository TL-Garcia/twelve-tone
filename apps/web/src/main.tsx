// vendors
import { render } from "solid-js/web";

// application
import App from "./App.tsx";

// global styles
import "./styles/index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error('No root element found');
}

render(() => <App />, root);
