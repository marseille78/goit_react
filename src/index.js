import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Example1 } from "components/Example1";
import { GlobalStyle } from "components/GlobalStyle";
import Reader from "components/Reader/Reader";

import publication from "./publications.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <Example1 /> */}
    <Reader items={publication} />
  </React.StrictMode>
);
