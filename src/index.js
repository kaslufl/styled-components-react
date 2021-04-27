import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from 'styled-components';

import App from "./App";
import GlobalStyles from "./theme/globalStyles";
import Theme from './theme/theme';

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
  ,
  root
);
