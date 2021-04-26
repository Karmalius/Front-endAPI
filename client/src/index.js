// Otetaan käyttöön react-kirjastoja, haetaan CSS-tyylitiedosto ja haetaan App-tiedosto
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Pyydetään reactia renderöimään App-komponentti HTML-sivulta löytyvään 'root'-elementtiin.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

