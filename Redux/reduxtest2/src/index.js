import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//리덕스설정
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import loginApp from './reducer'
//
//쿠키설정
import {CookiesProvider} from 'react-cookie'
//
import App from './App';
import * as serviceWorker from './serviceWorker';

//스토어 생성
const store = createStore(loginApp, applyMiddleware(ReduxThunk))

ReactDOM.render(
  //프로바이더로 감싸서 앱 전체에 스토어 연결시켜주기
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
