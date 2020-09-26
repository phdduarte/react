import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import BomDia from './componentes/Primeiro';
import Primeiro from './componentes/Primeiro';

// Quando passamos um 'HTML' em uma função como no exemplo abaixo
// na verdade estamos utilizando o JSX um javascript estendido para react.

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Primeiro />
    <BomDia />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
