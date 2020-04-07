import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //react-redux의 connect를 import 합니다
import { increment, decrement } from '../action'; 

class Button extends Component { 
    render() { 
        return ( 
        <div> 
        {/* + 버튼 클릭시 props.onIncrement를 실행 합니다. onIncrement는 code 2의 18번 줄에서 정의합니다. */}
            <button onClick={this.props.onIncrement}>+</button> 
        {/* - 버튼 클릭시 props.onDecrement를 실행합니다. onDecrement는 code 2의 19번 줄에서 정의 합니다. */}
            <button onClick={this.props.onDecrement}>-</button> 
        </div> ); 
        } 
    } 
    
    let mapDispatchToProps = (dispatch) => {
        // props.onIncrement를 실행 할 경우 increment action을 dispatch 합니다. 
        return { 
                 onIncrement: () => dispatch(increment()), 
        // props.onDecrement를 실행 할 경우 decrement action을 dispatch 합니다.
                 onDecrement: () => dispatch(decrement()) 
        } 
    } 
    
    //props를 store의 state에 매칭 시켜주는 connect 함수를 실행 합니다.
    Button = connect(undefined, mapDispatchToProps)(Button); 
    
    export default Button;




// import React, { Component } from 'react'; 
// //increment와 decrement라는 action을 import 합니다. (정확히는 action 객체를 리턴하는 함수..)
// import { increment, decrement } from '../action'; 

// class Button extends Component { 
//     constructor(props) { 
//         super(props); 
//         this.onIncrement = this.onIncrement.bind(this); 
//         this.onDecrement = this.onDecrement.bind(this); 
//     } 
//     /** + 버튼을 클릭 했을 때, 실행되는 이벤트 핸들러입니다. 
//      * 이 이벤트 핸들러는 increment라는 action을 dispatch 합니다.
//     */
//     onIncrement(event) { 
//         this.props.store.dispatch(increment()) 
//     } 
    
//     /** - 버튼을 클릭 했을 때, 실행되는 이벤트 핸들러입니다. 
//      * 이 이벤트 핸들러는 decrement라는 action을 dispatch 합니다.
//      *  */
//     onDecrement(event) { 
//         this.props.store.dispatch(decrement()) 
//     } 
        
//     render() { 
//         return ( 
//         <div> 
//         {/* 이벤트 핸들러를 등록합니다. */}
//             <button onClick={this.onIncrement}>+</button> 
//             <button onClick={this.onDecrement}>-</button> 
//         </div> ); 
//         } 
//     } 

// export default Button;
