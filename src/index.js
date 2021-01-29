import React from 'react';
import ReactDOM from 'react-dom';

import './initLocale';

import App from './App';

import 'styles/main.scss';
import 'static/fonts/if.css';

const rootEl = document.createElement('div');
rootEl.id = 'app';

document.body.appendChild(rootEl);

ReactDOM.render(<App />, rootEl);
