import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App'; import './index.css'; 
import { createStore } from 'redux'; 
// react-redux의 Provider 컴포넌트를 import 합니다.
import { Provider } from 'react-redux'; 
import counterApp from './reducers'; 


const store = createStore(counterApp); 

ReactDOM.render( 
    // Provider 컴포넌트 안에 App 컴포넌트를 둡니다. 그리고 Provider 컴포넌트에만 store을 지정해 주면 됩니다.
    <Provider store={store}> 
        <App /> 
    </Provider>, 
document.getElementById('root') );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import { createStore } from 'redux';
// import counterApp from './reducers';

// const store = createStore(counterApp);

// const render = () => {
//   ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   );
// }

// store.subscribe(render);
// render();

