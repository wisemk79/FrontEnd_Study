import React from 'react';
import ReactDOM from 'react-dom';
import DefaultApp from './App';//App.js를 기본 application으로 한다.
import * as serviceWorker from './serviceWorker';

const path = document.location.pathname.replace("/", "")//url에서 /뒤쪽의 경로값을 가져온다. 파일이름만가져옴
const SubApp = (() => {
    try {
        //require는 해당경로에 있는 js파일을 동적으로 로딩한다.(import와 동일한 역할)/ default를 붙힌이유는 App.js를 export할때 default를 했기 때문
        return require(`./${path}`).default
    } catch (e) {
        return null
    }
})()
const App = SubApp || DefaultApp

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
