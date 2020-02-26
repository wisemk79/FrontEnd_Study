import AddNumber from "../Components/AddNumber"
import {connect} from 'react-redux'
//AddNumber의 props는 이벤트 함수에대한 것만 있을 뿐 state(상태값을 전달하는 것이 없기 때문에)
//connect의 첫째 값은 null이 될것이고 dispatch 함수만 인자로 주어진다.

const mapDispatchToProps = (dispatch) => {
    return {
        //AddNumber의 프로퍼티로 전달하는 기능(onClick)을 이름으로주고 그 값을 함수를 준다.
            onClick:(size) => dispatch({type:'INCREMENT',size: size})
        }
    }

export default connect(null, mapDispatchToProps)(AddNumber)
// import React, { Component } from 'react'
// import store from '../store'

// //wrapper컴포넌트로 가짜 컴포넌트, 기존 component폴더의 addnumber는 보여주기위한거고 이 컴포넌트는 
// export default class extends Component {
//     render() {
//         return (
//             <AddNumber onClick={(size)=>
//                 //this.props.onClick(this.state.size)
//                 store.dispatch({type:'INCREMENT',size:size})
//                 }/>
//         )
//     }
// }
