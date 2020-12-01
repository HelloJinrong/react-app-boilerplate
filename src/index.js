import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootEl = document.createElement('div');
rootEl.id = 'app';
document.body.appendChild(rootEl);

ReactDOM.render(<App />, rootEl);
