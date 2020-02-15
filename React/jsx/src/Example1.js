import React, {Component, Fragment} from 'react';//리액트 모듈이 설치되어있는데 그것을 사용하겠다.
//리액트를 사용할땐 꼭 React를 import해줘야한다.

class App extends Component{//클래스를 이용해서 컴포넌트를 만들어준다.
  render(){//랜더 메소드, js형태의 코드를 리턴해줘야한다.
    const name = "su";
    const value = 1;
    return(//기존에 input 태그도 /로 닫아줘야한다. 또한 div가 2개이상인 경우 div로 감싸줘야한다. 들어가면 안된다.
    <Fragment>
      <div>
        <h1>Twit</h1>
        <input type = "text"/>
      </div>
    </Fragment>
    );
  }
}

export default App;