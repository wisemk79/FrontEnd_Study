import React, { Component } from 'react'

export default class PhoneForm extends Component {
    input = React.createRef();//ref를 만들어준다
    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {//handleChange라는 값을 e라는 파라메터를 받아 
        this.setState({//앞으로 어떻게 state가 바뀔것인가 e.target.value안에 있다.
            // name : e.target.value,//여기서 target은 input에서 발생한 이벤트에따라 변화하게되는것이다.
            // phone : e.target.value
            
            //Form 태그의 name값들은 프로퍼티의 target에 들어가게된다.
            [e.target.name] : e.target.value,
            [e.target.phone] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();//원래 해야할 작업을 안하게하는 것 예를들어 새로고침 방지
        this.props.onCreate({//아래내용은 this.state로 대체할 수 있다. <-onCreate함수는 App.js에서 건너온것이며, 자식컴포넌트의 값을 가져온다.
            name : this.state.name,
            phone : this.state.phone
        })
        this.setState({
            name : '',//submit 이후에 input박스 내에 텍스트를 초기화시켜준다. 
            phone : ''
        })
        this.input.current.focus();//submit하게되면 input박스 안으로 커서가 focus된다.
    }

    render() {
        return (
        <div>
            <div>
                Phone Form 컴포넌트입니다.
            </div>
            {/* submit을 했을때 이제는 아무반응이 없을 것이다.*/}
            <form onSubmit = {this.handleSubmit}>
                {/* input에서 onChange이벤트 handleChange 이벤트 를 발생시킨다.   placeholder는 아무것도 안적혀있을때 노출시킬 문자를 나타낸다.*/}
                {/* 두가지의 input태그를 구분해주려면 name값을 설정해주는것이 좋다.*/}
                <input 
                name = "name"
                placeholder = "이름" 
                onChange = {this.handleChange} 
                value = {this.state.name}
                ref = {this.input}//dom에 직접적으로 접근하기위한 함수를 넣어준다
                />
                
                <input 
                name = "phone"
                placeholder = "전화번호" 
                onChange = {this.handleChange} 
                value = {this.state.phone}
                />
                {/* 원래 버튼은 submit하게되면 페이지를 새로고침한다. 이를 방지시켜주기위한 작업을해보자.(handle submit함수)*/}
                <button type = "submit">등록</button>
                {/* input 박스에 적은 내용을 그대로 출력한다. */}
                {/* <div>
                    {this.state.name}  {this.state.phone}
                </div> */}
            </form>
        </div>
        )
    }
}
