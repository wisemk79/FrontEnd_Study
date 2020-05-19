# WebPack  
## IIFE  
즉시 실행 함수 표현으로 정의 되자마자 즉시 실행되는 Javascript 함수를 의미한다.  
`````
(function(){
    statement
})();
`````  
## CommonJS  
CommonJS는 자바스크립트를 사용하는 모든 환경에서 모듈을 하는 것이 목표이다.  
exports 키워드로 모듈을 만들고 require() 함수로 불러들이는 방식이다.  
대표적으로 서버 사이드 플랫폼인 Nodejs에서 사용한다.  
* ES6 이전 방식  
- math.js  
````
export function sum(a, b){return a + b};
````  
- app.js  
````
const sum = require('./math.js');
sum(1,2);
````  
* ES6 방식  
- math.js  
````
export function sum(a, b){return a + b};
````  
- app.js  
````
import * as math from './math.js'
math.sum(1,2);
````  
## 모듈 시스템 사용방법  
````
<script type="module" src="src/app.js"></script>
````  
````
npx lite-server// 이 명령어로 간단하게 해당 디렉토리에 있는 파일을   
서버에서 실행할 수 있다
````  
&nbsp;  
## webpack의 역할  
웹팩은 모듈로 연결된 여러가지 자바스크립트 파일을 합쳐주는 역할을 한다.  
이렇게 하나로 합쳐진 파일을 번들(bundle)이라고 한다.  
웹팩을 설치해서 번들링하는 작업을 해보자.  
````
npm install -D webpack webpack-cli// 여기서 -D를 넣는 거는 개발용 Dpendency 설정을 위해 해주는 것이다. 
````  
- package.json  
````
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
    "react": "^16.13.1"
  },
  "devDependencies": {// -D를 줘서 이렇게 따로 설정되는데 이것은 개발용 Dependencies이다.
  //설치된 라이브러리는 node_modules에 .bin폴더에 있다.
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  }
}
````  

## Entry  
![웹팩](../images/webpack.PNG)  
개념: 모듈의 시작점으로 