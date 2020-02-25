import React, { Component } from 'react'
//import store from '../store'

export default class AddNumber extends Component {
    state = {size : 1}
    handleTextChange = (e)=>{
                        //Number()함수를 이용해 기존에 텍스트필드의 문자를 숫자로 변경해준다. 
        this.setState({size: Number(e.target.value)})
    }
    render() {
        return (
            <div>
               <h1>Add Number</h1>
               {/* 클릭시 this.props.onClick으로 전달해주는데 this.state.size값을 전달해준다. */}
               <input type="button" value="+" onClick={()=>
                this.props.onClick(this.state.size)
                //store.dispatch({type:'INCREMENT',size:this.state.size})
                }/>
               {/* handledlechange 이벤트 발생시 text박스의 벨류값을 스테이트에 set해주고  value={this.state.size}값을 지정해줌*/}
               <input type="text" value={this.state.size} onChange={this.handleTextChange}/> 
            </div>
        )
    }
}