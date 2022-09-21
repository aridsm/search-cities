import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GeoContextProvider from "./context/geoContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeoContextProvider>
      <App className="App" />
    </GeoContextProvider>
  </React.StrictMode>
);
