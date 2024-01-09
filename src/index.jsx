import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.js";
import { BrowserRouter as Router } from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <Router>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </Router>
);
