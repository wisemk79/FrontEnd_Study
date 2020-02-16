import React, {Component} from 'react';
import MyComponent from './LifeCycleAPIMyComponent';

class App extends Component{
    state = {
        counter : 1,
        error : false
    }

    componentDidCatch(error, info){//실수로 잡지못했던 버그들을 잡기위해 사용하는 것 에러값을 state에 넣어주고 rander함수에 에러났을때 메세지를 출력할수 있도록 알려줘야함
       this.setState({
           error : true
       })
       //API를 통해서 서버로 오류 내용 날리기 작업을 따로 로직을 만들어주면된다.
        console.log(error);
        console.log(info);
    }

    constructor(props){
        super(props);//리액트에서 컴포넌트를 불러온다음에 컴포넌트를 App에 상속해주고 컴포넌트가 원래 가지고 있는 생성자함수를 먼저 호출해주고 다음 작업을 하는 것
        console.log("constructor");
    }

    componentDidMount(){
        console.log('componentDidMount');
        console.log(this.myDiv.getBoundingClientRect().height);
    }

    handleClick = () => {
        this.setState({
          counter : this.state.counter  + 1
        })
    }

    render(){
        if(this.state.error === true){
            return (
            <div>에러가 났어요!</div>
            )
        }
        return(
            
            <div ref = {ref => this.myDiv = ref}>
                <h1>안녕하세요. 리액트</h1>
                {/* this.state.counter가 10보다 작을 때만 && 오른쪽의 태그를 출력한다.  */}
              {this.state.counter < 10 &&  <MyComponent value = {this.state.counter}/>} 
                <button onClick = {this.handleClick}>Click Me</button> 
            </div>
        )
    }
}

export default App;