import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyled = createGlobalStyle`

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./fonts/ProximaNova-Black.eot');
    src: local('./fonts/Proxima Nova Black'), local('ProximaNova-Black'),
      url('./fonts/ProximaNova-Black.eot?#iefix') format('embedded-opentype'),
      url('./fonts/ProximaNova-Black.woff') format('woff'),
      url('./fonts/ProximaNova-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./fonts/ProximaNova-Bold.eot');
    src: local('./fonts/Proxima Nova Bold'), local('ProximaNova-Bold'),
      url('./fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),
      url('./fonts/ProximaNova-Bold.woff') format('woff'),
      url('./fonts/ProximaNova-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./fonts/ProximaNova-Regular.eot');
    src: local('./fonts/Proxima Nova Regular'), local('ProximaNova-Regular'),
      url('./fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
      url('./fonts/ProximaNova-Regular.woff') format('woff'),
      url('./fonts/ProximaNova-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./fonts/ProximaNova-Extrabld.eot');
    src: local('./fonts/Proxima Nova Extrabold'), local('ProximaNova-Extrabld'),
      url('./fonts/ProximaNova-Extrabld.eot?#iefix') format('embedded-opentype'),
      url('./fonts/ProximaNova-Extrabld.woff') format('woff'),
      url('./fonts/ProximaNova-Extrabld.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Proxima Nova";
  }

  body {
    background-color: #ffdf8c;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyled />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);