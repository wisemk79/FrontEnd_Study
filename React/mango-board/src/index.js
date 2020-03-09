import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();





// import { Provider } from "react-redux";
// import reducer from "./reducers";
// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk'
// import Database from "./Database";
// const reduxDevTools =  window.__REDUX_DEVTOOLS_EXTENSION__
//스토어를 만들때, reducer를 넣어준다
// const store = createStore(reducer,applyMiddleware(thunk, reduxDevTools));
// // 데이터 베이스 생성
// window.database = new Database()

// // 테이블 생성
// try {
//   window.database.execute("CREATE TABLE articles(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, contents TEXT)")
// } catch (_) {}

