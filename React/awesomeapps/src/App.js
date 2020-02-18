import React, {Component} from 'react';
import styled , {createGlobalStyle, keyframes, css, ThemeProvider} from 'styled-components';
import theme from './theme.js'
//import "./App.css"

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

export default class App extends Component {
  render() {
    return (
      // ThemeProvider라는 것으로 컨테이너 전체를 감싸고 각 테마의 값을 넣어주면된다.
    <ThemeProvider theme = {theme}>
      <Container>
          {/* <button className = "button button--success">Hello</button>
          <button className = "button button--danger">Hello</button> */}
          <Button danger rotationTime = {3}>Hello</Button>
          <Button>Hello</Button>
          <Form/>
          <Anchor href = "http://google.com">Go to Google</Anchor>
          <Input placeholder = "hello"/>
      </Container>
      </ThemeProvider>
    )
  }
}

const awesomeCard = css`
  box-shadow : 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);
  ${'' /* 백그라운드 컬러는 아래처럼 props를 가져와서 사용하면된다. */}
  background-color : ${props => props.theme.successColor};
  border-radius : 10px;
  padding : 20px;
`

const Input = styled.input.attrs({
  required : true
})`
  border: none;
  ${awesomeCard}
`
const Card = styled.div`
  background-color : red;
`

const Container = styled.div`
  height : 100vh;
  width : 100%;
  ${awesomeCard}
  background-color : pink;
  ${Card}{
    background-color : blue;
  }
`



//styled.클래스명 ₩₩ 백틱2개 안에 스타일을 써주면됨  만약 클래스명을 쓸일이 있다면 &을 사용
const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    background-color: red;
    font-weight: 600;
    -webkit-animation: none;
    cursor: pointer;
    &:active,
    &:focus{
    outline: none;   
    }
    background-color : ${props => props.danger ? "#e74c3c" : "#2ecc71"};
   
    ${ props => {
      if(props.danger){
        /* css를 import하고 return 할때 css를 참고해줘야한다(v4버전부터) */
        //태그에 붙은 값을 가져올려면 props. 을 해주는것이 좋다
        return css `animation: ${rotation} ${props.rotationTime}s linear infinite`;
      }
    }};
`;

const Anchor = styled(Button.withComponent("a"))`
    text-decoration : none;
`;

//에니메이션 효과(keyframes컴포넌트사용)
const rotation = keyframes`
  from{
    ${'' /* 0도에서부터 */}
    transform: rotate(0deg);
  }
  to{
    transform : rotate(360deg);
  }
`

const Form = () => (<Card><Button>What?</Button></Card>)

//버튼 태그에 danger가있으면 danger가뜨고 아니면 success가 뜬다
// const Button = ({danger}) =>(
// <button
//   className = {danger ? "button button--danger" : "button button--success"}
// >Hello</button>
// );
