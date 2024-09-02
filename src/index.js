import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Context from "./testContext/Context/Context";
// import App from "./testContext/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
