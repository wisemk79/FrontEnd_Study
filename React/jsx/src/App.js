import React, {Component, Fragment} from 'react';//리액트 모듈이 설치되어있는데 그것을 사용하겠다.
//리액트를 사용할땐 꼭 React를 import해줘야한다.

class App extends Component{//클래스를 이용해서 컴포넌트를 만들어준다.
  render(){//랜더 메소드, js형태의 코드를 리턴해줘야한다.
    const name = "su";
    return(//기존에 input 태그도 /로 닫아줘야한다. 또한 div가 2개이상인 경우 div로 감싸줘야한다. 들어가면 안된다.
    <Fragment>
      <div>
        <h1>Hello React name = {name}</h1>{/*중괄호를 이용해서 이름데이터를 바로 넣어줄 수 있다.*/}
        <input type = "text"/>
      </div>
      <div>div는 2개이상 들어갈려면 Fragment를 import해줘서 Fragment로 div태그를 감싸줄것</div>
      <div>
        {//조건문을 주고 싶은 경우 if문을 써도 되지만 아래와 같이 삼항 연산자를 사용해 줄 수 있다.
          1 + 1 === 2
          ? "맞다"
          : "틀리다"
        }
      </div>
    </Fragment>
    );
  }
}

export default App;