# react 구동방식

## create react app
웹서버와 웹페이지를 만든것
웹서버는 node js를 통해서 구동하는데, 웹서버 프로그램은 js작성이된다.
이때 사용하는 패키지가 보통 Express js를 사용한다.

## web page
html파일과 css와 js bundle로 구성된다.
js bundle에 있는 코드를 실행하여 Dom element를 생성하여 실행하는 방식으로 화면을 랜더링한다.

## js bundle
web pack이라는 js package bundler를 사용해서 패키징된 js파일이다.

## js bundle구현기술 
react, ui library(react bootstrap, matarial ui), react router, redux등을 사용


서버 사이드 코드와 js bundle설정과 관련된 dependency lib의 설정을 create react app이 생성해준다.
 "eject": "react-scripts eject" <---이것이 프로젝트 전체의 뼈대를 생성해줌

creat react app이 만들어주는것에 대한내용이었음

----
# react 코드 설명

## index js
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(리액트 컴포넌트, html dom element);

지정된 dom element에 리액트 컴포넌트를 랜더링한다.


# 예제 프로젝트 사용법
1. src에 원하는 js파일(예 : Example.js)을 추가하고 컴파일한다(저장하면 자동임).
2. http://localhost:3000/ <-뒤에 js파일 이름을 적어서 접속한다.(예 : http://localhost:3000/Example.js)





