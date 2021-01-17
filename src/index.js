import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'styles/main.scss';
import '../static/fonts/iconfont.css';

const rootEl = document.createElement('div');
rootEl.id = 'app';
document.body.appendChild(rootEl);

ReactDOM.render(<App />, rootEl);

// eslint-disable-next-line no-console
console.log('BASE_URL =', BASE_URL);
