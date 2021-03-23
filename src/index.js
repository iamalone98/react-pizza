import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { store } from "./redux";

import { HOSTNAME } from "./router/urls";

import App from "./App";
const GlobalStyled = createGlobalStyle`

  @font-face {
    font-family: 'Proxima Nova';
    src: url('${HOSTNAME}/fonts/ProximaNova-Black.eot');
    src: local('${HOSTNAME}/fonts/Proxima Nova Black'), local('ProximaNova-Black'),
      url('${HOSTNAME}/fonts/ProximaNova-Black.eot?#iefix') format('embedded-opentype'),
      url('${HOSTNAME}/fonts/ProximaNova-Black.woff') format('woff'),
      url('${HOSTNAME}/fonts/ProximaNova-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('${HOSTNAME}/fonts/ProximaNova-Bold.eot');
    src: local('${HOSTNAME}/fonts/Proxima Nova Bold'), local('ProximaNova-Bold'),
      url('${HOSTNAME}/fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),
      url('${HOSTNAME}/fonts/ProximaNova-Bold.woff') format('woff'),
      url('${HOSTNAME}/fonts/ProximaNova-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('${HOSTNAME}/fonts/ProximaNova-Regular.eot');
    src: local('${HOSTNAME}/fonts/Proxima Nova Regular'), local('ProximaNova-Regular'),
      url('${HOSTNAME}/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
      url('${HOSTNAME}/fonts/ProximaNova-Regular.woff') format('woff'),
      url('${HOSTNAME}/fonts/ProximaNova-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('${HOSTNAME}/fonts/ProximaNova-Extrabld.eot');
    src: local('${HOSTNAME}/fonts/Proxima Nova Extrabold'), local('ProximaNova-Extrabld'),
      url('${HOSTNAME}/fonts/ProximaNova-Extrabld.eot?#iefix') format('embedded-opentype'),
      url('${HOSTNAME}/fonts/ProximaNova-Extrabld.woff') format('woff'),
      url('${HOSTNAME}/fonts/ProximaNova-Extrabld.ttf') format('truetype');
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
    <Provider store={store}>
      <Router>
        <GlobalStyled />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);