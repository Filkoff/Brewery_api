import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";
import App from "./App";
import { AppProvider } from "./components/context/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
