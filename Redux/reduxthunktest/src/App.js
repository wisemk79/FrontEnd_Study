import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './App.css';

// Redux & Redux-Thunk test
import CountComponent from './components/Count';
import CountFCComponent from './components/CountFC';

import reducers from './reducers/reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountComponent />
        <CountFCComponent />
      </div>
    </Provider>
  );
}

export default App;