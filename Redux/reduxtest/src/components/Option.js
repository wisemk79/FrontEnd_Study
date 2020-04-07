import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //react-redux의 connect를 import 합니다.
import { setDiff } from '../action'; 

class Option extends Component { 
    constructor(props) { 
        super(props); 
        this.onChange = this.onChange.bind(this); 
    } 
    

    //사용자가 값을 입력할 경우 실행되는 이벤트 핸들러입니다. 
    //이벤트 핸들러는 props.onUpdateDiff 함수를 실행시킵니다. 
    //onUpdateDiff 함수는 code 2의 33번 줄에서 정의됩니다.
    onChange(event) { 
        this.props.onUpdateDiff(parseInt(event.target.value)); 
    } 
    
    render() { 
        return ( 
        <div> 
        {/* props.diff의 값을 출력합니다. diff는 code 2의 27번 줄에서 정의됩니다 */}
            <input value={this.props.diff} onChange={this.onChange} /> 
        </div> 
        ); 
    } 
} 

// store.state를 prop로 매핑하는 코드입니다.
let mapStateToProps = (state) => { 
    return { diff: state.counter.diff } 
} 


//props.onUpdateDiff를 실행 할 경우 dispatch 할 action을 정의하는 코드입니다.
let mapDispatchToProps = (dispatch) =>{ 
    return { onUpdateDiff: (value) => dispatch(setDiff(value)) }; 
} 

//mapStateToProps와 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출합니다.
Option = connect(mapStateToProps, mapDispatchToProps)(Option); 


export default Option;




// import React, { Component } from 'react'; 
// import { setDiff } from '../action'; // setDiff action을 import 합니다.
// class Option extends Component { 
//     constructor(props) { 
//         super(props); 
//         this.onChange = this.onChange.bind(this); 
//     } 
//     onChange(event) { 
//         this.props.store.dispatch(setDiff(parseInt(event.target.value))); 
// /**사용자가 값을 입력할 경우 실행되는 이벤트 핸들러입니다. 
//  * 이벤트 핸들러는 dispatch로 setDiff라는 action을 보내게 됩니다. 
//  * setDiff의 인자는 사용자의 입력값이 됩니다. 
//  * dispatch는 reducer로 action을 전달하고 reducer는 store에 state를 저장합니다.
// */
//     } 
    
//     render() { 
//         return ( 
//         <div> 
//         {/* store.getState()로 state를 가져와, counter.diff를 출력 합니다. 
//             그리고 사용자가 값을 입력 했을 때 호출되는 이벤트 핸들러를 등록합니다.
//         */}
//             <input 
//                 value={this.props.store.getState().counter.diff} 
//                 onChange={this.onChange} 
//             /> 
//         </div> 
//         ); 
//     } 
// } 

// export default Option;
