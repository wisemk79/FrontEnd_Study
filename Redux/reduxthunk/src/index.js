import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//리덕스설정
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import loginApp from './reducer'
//
import App from './App';
import * as serviceWorker from './serviceWorker';

//스토어 생성
const store = createStore(loginApp)

ReactDOM.render(
  // 프로바이더로 감싸서 앱 전체에 스토어 연결시켜주기
    <Provider store={store}>
      <App />
    </Provider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
