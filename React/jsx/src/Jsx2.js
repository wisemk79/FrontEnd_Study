import React, {Component, Fragment} from 'react';
import './Jsx2.css';//css파일 불러오기
class App extends Component{//클래스를 이용해서 컴포넌트를 만들어준다.
  render(){
    // const style = {
    //   backgroundColor : 'black',
    //   padding : '1px',
    //   color : 'white',
    //   fontSize : '36px'//<-- 10 + 5 + 'px' 이런식으로도 가능하다.
    // }
    return(
    <Fragment>
      {/* <div style = {style}> 위에는 직접스타일을 인라인으로 적용할때이고 */}
      <div> {/* className은 css파일을 import해줘서 class에 적용하는 방법이다. */}
        <div className = 'App'>안녕하세요!</div>
      </div>
    </Fragment>
    );
  }
}

export default App;