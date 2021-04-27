import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyles from "./theme/globalStyles";

const root = document.getElementById("root");

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  root
);
