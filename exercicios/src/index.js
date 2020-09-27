import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';
import Multi from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';

// Quando passamos um 'HTML' em uma função como no exemplo abaixo
// na verdade estamos utilizando o JSX um javascript estendido para react.

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Primeiro />
    <BomDia name='Pedro Duarte' age={10} />
    <Multi.BoaTarde name='Bia' />
    <Multi.BoaNoite name='Ana' />
    <Saudacao tipo='Ei' name='João' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
