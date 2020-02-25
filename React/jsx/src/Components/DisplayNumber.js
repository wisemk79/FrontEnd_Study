import React, {Component} from 'react'
//import store from '../store'


//이컴포넌트는 wrapping됨으로서 presentation 기능만하므로 재사용할 수 있게된다.
export default class DisplayNumber extends Component {
    // state = {
    //     // 스토어에서 state를 가져오는데, number값을 가져온다.
    //     number : store.getState().number
    // }
    // constructor(props){
    //     //부모의 props를넘겨받고 subscribe하여 setstate해준다.
    //     super(props)
    //     store.subscribe(()=>
    //         this.setState({number: store.getState().number})
    //     )
    // }
    render() {
        return (
            <div>
               <h1>Display Number</h1>
               {/* displayNumber는 값을 넣지 않을것이기 때문에 readOnly적용 */}
               <input type="text" value={this.props.number} readOnly/> 
               {this.props.unit}
               {/* <input type="text" value={this.state.number} readOnly/>  */}
            </div>
        )
    }
}