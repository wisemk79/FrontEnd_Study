import React, {Component, Fragment} from 'react';//리액트 모듈이 설치되어있는데 그것을 사용하겠다.
//리액트를 사용할땐 꼭 React를 import해줘야한다.
import PhoneForm from './Components/PhoneForm';

class App extends Component{//클래스를 이용해서 컴포넌트를 만들어준다.
  render(){//랜더 메소드, js형태의 코드를 리턴해줘야한다.
    const name = "su";
    const value = 1;
    return(//기존에 input 태그도 /로 닫아줘야한다. 또한 div가 2개이상인 경우 div로 감싸줘야한다. 들어가면 안된다.
    <Fragment>
      <div>
      <PhoneForm/>
        <h1>Hello React name = {name}</h1>{/*중괄호를 이용해서 이름데이터를 바로 넣어줄 수 있다.*/}
        <input type = "text"/>
      </div>
      <div>div는 2개이상 들어갈려면 Fragment를 import해줘서 Fragment로 div태그를 감싸줄것</div>
      <div>
        { 
            name === "su" && <div>쑤가 나타났다!</div>//<-- name이 su랑 같으면 &&연산자 오른쪽의 태그를 랜더링해준다(이를 조건부 랜더링이라고 한다.), 만약 같지 않다면 오른쪽의 div 태그를 랜더링되지 않는다.
        }
        {//조건문을 주고 싶은 경우 if문을 써도 되지만 아래와 같이 삼항 연산자를 사용해 줄 수 있다.
          1 + 1 === 2
          ? "맞다"
          : "틀리다"
        }
        {
          (() => {//function()을 감싸준다음에 ()로 호출해주면 익명함수가 된다. 근데, function을 사용하는것보단 arrow function을 이용하면 좀더 깔끔한 코드가 될수있다. 
            if(value === 1) return <div>1이 출현했다!@</div>
            if(value === 1) return <div>1이 출현했다!@</div>
            if(value === 1) return <div>1이 출현했다!@</div>
            return <div>없다!</div>
          })()
        }
      </div>
    </Fragment>
    );
  }
}

export default App;