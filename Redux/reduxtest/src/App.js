import React, { Component } from 'react';  
import './App.css'; 
import Counter from './components/Counter'; 
import Option from './components/Option'; 
import Button from './components/Button'; 


class App extends Component { 
    render() { 
        return ( 
        // code 1에서 각각의 컴포넌트에 넘겨주던 store를 넘겨주지 않아도 됩니다.
        <div> 
            <Counter /> 
            <Option /> 
            <Button /> 
        </div> 
        ); 
    } 
} 

export default App;



// import React from 'react';
// import Counter from './components/Counter';
// import Button from './components/Button';
// import Option from './components/Option';

// class App extends React.Component {
//     render(){
//         return (
//             <div style={ {textAlign: 'center'} }>
//                <Counter store={this.props.store} /> 
//                <Option store={this.props.store} /> 
//                <Button store={this.props.store} />
//             </div>
//         );
//     }
// }

// export default App;