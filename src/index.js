import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataLayer } from "./Components/DataLayer";
import reducer, { initialState } from "./Components/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>
);
