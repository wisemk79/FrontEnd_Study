import React, { Component } from 'react'

export default class PhoneForm extends Component {
    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {//handleChange라는 값을 e라는 파라메터를 받아 
        this.setState({//앞으로 어떻게 state가 바뀔것인가 e.target.value안에 있다.
            // name : e.target.value,//여기서 target은 input에서 발생한 이벤트에따라 변화하게되는것이다.
            // phone : e.target.value
            
            //밑에서의 name값들은 프로퍼티의 target에 들어가게된다.
            [e.target.name] : e.target.value,
            [e.target.phone] : e.target.value

        });
    }
    render() {
        return (
        <div>
            <div>
                Phone Form 컴포넌트입니다.
            </div>

            <form>
                {/* input에서 onChange이벤트 handleChange 이벤트 를 발생시킨다.   placeholder는 아무것도 안적혀있을때 노출시킬 문자를 나타낸다.*/}
                {/* 두가지의 input태그를 구분해주려면 name값을 설정해주는것이 좋다.*/}
                <input 
                name = "name"
                placeholder = "이름" 
                onChange = {this.handleChange} 
                value = {this.state.name}
                />
                
                <input 
                name = "phone"
                placeholder = "전화번호" 
                onChange = {this.handleChange} 
                value = {this.state.phone}/>
                {/* input 박스에 적은 내용을 그대로 출력한다. */}
                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
            </form>
        </div>
        )
    }
}
