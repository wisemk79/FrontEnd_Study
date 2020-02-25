import DisplayNumber from '../Components/DisplayNumber'
import {connect} from 'react-redux'//react-redux에 연결한다.
//Redux의 state를 react의 props로 mapping해준다.

/*mapReduxStateToReactProps함수는 state를 무조건 인자로 받게되는데
이 함수하는 역할을 아래 코드에서 보면

     state = {
         number : store.getState().number <--store의 state를 가져와 state에 넣어주고
     }
     constructor(props){
         //부모의 props를넘겨받고 subscribe하여 setstate해준다.
         super(props)
        store.subscribe(()=><---store를 subscribe를 하고
             this.setState({number: store.getState().number})<--state에 store.getState().number set해주고
 )
     }
     render() {
         return (
             <DisplayNumber number={this.state.number}<--state를 넣어주는것까지가 이 함수의 역할이되는것이다.
    ***아래의 함수는 리덕스의 state값이 바뀔때마다 호출될 것이다.
*/
const mapReduxStateToReactProps = (state) => {
    return {
        //DisplayNumber에들어갈 props의 이름: 공급될 값을 이곳에 적어주면된다.
        number: state.number
    }
}
//Redux의 dispatch를 react의 props에 mapping해준다.
// const mapReduxDispatchReactToProps = () => {
//     return {
//         }
//     }

//connect()라는 함수로 함수를 리턴하고 그것의 인자로 wrapping할 컴포넌트를 지정해줌으로서 
//아래와같은 wrapping클래스가 만들어지는 결과가 된다.
//근데, 여기서 오류가 나는이유는 메인 컴포넌트를 index.js에서 store로 묶어주지 않았기 때문이다. index.js로 가자,
export default connect(mapReduxStateToReactProps)(DisplayNumber)

// import React, { Component } from 'react'
// import store from '../store'

// export default class extends Component {
//     state = {
//         // 스토어에서 state를 가져오는데, number값을 가져온다.
//         number : store.getState().number
//     }
//     constructor(props){
//         //부모의 props를넘겨받고 subscribe하여 setstate해준다.
//         super(props)
//         store.subscribe(()=>
//             this.setState({number: store.getState().number})
//         )
//     }
//     render() {
//         return (
                                    //connect()함수가 DisplayNumberRoot에서 넣어준 unit={this.props.unit} props를 아래처럼 자동으로 세팅해준다.(state는 처리하지 않음)
//             <DisplayNumber number={this.state.number} unit={this.props.unit}/>
//         )
//     }
// }
