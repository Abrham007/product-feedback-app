import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.js";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
