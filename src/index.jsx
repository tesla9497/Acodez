import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes";
import { DrawerProvider } from "./components/context/DrawerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawerProvider>
      <Routes />
    </DrawerProvider>
  </React.StrictMode>
);
