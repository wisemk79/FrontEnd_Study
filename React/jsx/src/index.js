import React from "react";
import ReactDOM from "react-dom";
import DefaultApp from "./App"; //App.js를 기본 application으로 한다.
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from './store'

const path = document.location.pathname.replace("/", ""); //url에서 /뒤쪽의 경로값을 가져온다. 파일이름만가져옴
const SubApp = (() => {
  try {
    //require는 해당경로에 있는 js파일을 동적으로 로딩한다.(import와 동일한 역할)/ default를 붙힌이유는 App.js를 export할때 default를 했기 때문
    return require(`./${path}`).default;
  } catch (e) {
    return null;
  }
})();
const App = SubApp || DefaultApp;

//store를 연결해주기위해 react-redux의 provider로 연결해준다.
ReactDOM.render(
    // provider의 props로 store를줘서 메인컴포넌트 하위의 모든 컴포넌트에 redux를 공급해준다(이렇게하면 모든컴포넌트에 따로 store를 공급해줄 필요가 없다.).
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
