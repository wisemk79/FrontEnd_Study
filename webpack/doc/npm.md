# Node js  
cmd(터미널)에 node라고 입력하게되면 노드 터미널도구(repm)가 실행된다  
여기에는 자바스크립트 코드의 결과를 확인할 수 있다.  
종료하고 싶을 땐 .exit를 입력하면된다.  


## node js 프로젝트 생성하기  
````
// 터미널에서 작업  
mkdir sample//프로젝트 폴더 생성  
cd sample
npm init //프로젝트를 생성하는 명령어 <-이렇게 생성하게되면  package.json 파일이 생성된다.

````
&nbsp;  
### package.json  
`````
{
  "name": "sample", // 프로젝트의 이름
  "version": "1.0.0", // 버전정보
  "description": "", 
  "main": "index.js", // 
  "scripts": { //프로젝트를 자동화 할 수 있는 쉘 스크립트를 입력하는것
    "test": "echo \"Error: no test specified\" && exit 1",
    /프로젝트 명령어 인데, "Error: no test specified\" && exit 1"라는 
    문자열을 echo명령어로 출력을 하고 에러코드 1번(exit 1)을 반환한다. 
    이 코드를 실행해 볼려면 npm 스크립트명으로 실행가능하다(npm test)/
    
    //만약 npm만 입력했을때 나오는 기본적인 명령어 외에 다른 명령어를 만들고싶다면,
    아래와 같이 sciprt에서 추가해 주면된다.
    이때, 커스텀으로 만든 명령어는 npm run 명령어 와 같은 형식으로 실행한다.
    "build": "echo \"여기에 빌드 스크립트를 추가합니다.\""

  },
  "author": "",
  "license": "ISC"
}
`````  
&nbsp;  
### package.json npm test 결과값  
````

> npm test

> sample@1.0.0 test C:\Users\user\Downloads\test\FrontEnd_Study\webpack\sample
> echo "Error: no test specified" && exit 1

"Error: no test specified"
npm ERR! Test failed.  See above for more details.
````  
&nbsp;  
## 패키지 설치 방법  
1. CDN을 이용하는 방법  
````
// 아래와 같이 직접 스크립트를 가져오는 방법이 있다.
// CDN의 단점은 CDN 서버가 장애가 나는 경우 해당 라이브러리를 가져올 수 없다는 것이다.
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
````  
2. npm install  
````
npm install 설치하고자하는 라이브러리명
npm install react
````  
- package.json  
`````
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "echo \"여기에 빌드 스크립트를 추가합니다.\""
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.13.1" //<--dependencies에 react가 생겼다. 그런데 ^16.13.1의 의미는 무엇일까?
  }
}
`````  
&nbsp;  
### 유의적 버전  
개념: 버전 번호를 관리하기 위한 규칙  
유의적 버전은 주(Major), 부(Minor), 수(Patch) 세가지 숫자를 조합해서 버전을 관리한다.  
위의 ^16.13.1의 의미는 주가 16버전 부가 13버전 수 버전이 1인 것이다.  
- 주 버전: 기존 버전과 호환되지 않게 변경한 경우에 주버전을 올림
- 부 버전: 기존 버전과 호환되면서 기능이 추가된 경우 부버전을 올림
- 수 버전: 기존 버전과 호환되면서 버그를 수정한 경우 수버전을 올림  
### 버전의 범위  
- 틸트(~): 마이너 버전이 표시되어 있으면 패치버전을 변경한다.   
  예를 들어 ~1.2.3 표기는 1.2.3부터 1.3.0미만까지를 포함한다.  
- 캐럿은(^): 정식버전에서 마이너와 패치버전을 변경한다.   
  예를 들어 ^1.2.3 표기는 1.2.3부터 2.0.0미만까지를 포함한다.  
정식버전 미만인 0.x 버전은 패치만 갱신한다. ^0 표기는 0.0.0부터 0.1.0 미만 까지를 포함한다.  
&nbsp;  
### npm install 명령어  
npm install을 하게되면 package.json에 있는 dependencies의 라이브러리들을 설치한다.  
### package.json 파일 보는법  
````
cat node_modules/react/package.json  
````  

### 라이브러리 버전 확인 방법  
````
npm view react versions
````