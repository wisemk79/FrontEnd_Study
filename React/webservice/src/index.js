import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//리액트는(library) .표시(render)해준다 id가 root인곳에
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
