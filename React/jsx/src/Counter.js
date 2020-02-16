import React, {Component} from 'react';

class Counter extends Component{
//state를 작성하는 데 state는 문자 또는 숫자가 아닌 객체여야한다. state안에 값을 넣어준다
    state = {//state는 컴포넌트 내부에 있고 이것을 바꾸기 위해서는 setState()를 이용해서 변경해주면된다.
        number : 1
    }

    constructor(props){//arrow function을 쓴다면 굳이 이걸 쓸 필요는 없다.
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);//<--this로 감싸준다.
    }


    //증가시킬 함수를 arrow function을 이용하여만든다.
    handleIncrease = () => {
       // this.state.number++; <--컴포넌트가 state값이 업데이트 되었는지 알 수가 없다.
       this.setState({//setState 함수에 새로운 객체를 전달하여 setState를 호출한다.
           number : this.state.number + 1
       })
    }

    //만약 아래의 함수들을 arrow로 작성하지 않으면(handleDecrease()<--이런식으로 작성) this를 인식할 수없어 오류가 나게된다.
    //이렇게 작성하고싶으면 생성자 형식으로 하나 만들어줘서 설정해줘야한다. constructor를 참고

    handleDecrease = () => {
       // this.state.number--;
       this.setState({
        number : this.state.number - 1
       })
    }

    render(){
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {/* onclick에다가 함수를 넣어주는데 this.handleincrease를 중괄호 안에 넣어준다 */}
                <button onClick = {this.handleIncrease}>+</button>
                <button onClick = {this.handleDecrease}>-</button>
            </div>
        )
    }
}

//정리
//props는 읽기전용, 부모객체가 자식객체에 주는것 / state는 자신이 가지고있는것.

export default Counter;
