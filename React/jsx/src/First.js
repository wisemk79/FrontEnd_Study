import React, { Component, Fragment} from 'react'

export default class First extends Component {
    render() {
        const name = "su";
        const value = 1;
        return (
            <Fragment>
            <div>
            
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
        )
    }
}
