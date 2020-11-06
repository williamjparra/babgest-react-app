// const element = document.createElement('h1');
// element.innerText = 'hello,platzi badges!';

// var container = document.getElementById('app');

// container.appendChild(element);
import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
// const jsx = <h1>hello, platzi badges from React!</h1>; esto es jsx
// const element = React.createElement('a',
//  { href: 'https://platzi.com'},
//   'ir a platzi') tambien puedo usar variables como en el jemplo de abajo 
var container = document.getElementById('app');

ReactDom.render(<App />, container);
