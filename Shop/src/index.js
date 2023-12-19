import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./components/App/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
