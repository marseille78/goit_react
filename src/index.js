import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Context from "./testContext/Context/Context";
// import App from "./testContext/App";

import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </BrowserRouter>
);
