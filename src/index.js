import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import DB from './db';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App db={new DB(store)} />, document.getElementById('root'));
registerServiceWorker();
