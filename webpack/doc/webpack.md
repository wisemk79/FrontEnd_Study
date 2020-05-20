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
![웹팩](../images/webpack.PNG)  
웹팩은 모듈로 연결된 여러가지 자바스크립트 파일을 합쳐주는 역할을 한다.  
위의 이미지에서 보면 왼쪽의 모든 자바스크립트 파일이 합쳐져서  
오른쪽에 있는 파일들 처럼 합쳐주는 것이 번들링 이라고한다.  
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
개념: 모듈의 시작점으로 위의 사진에서 왼쪽 맨위의 js파일의 위치를  
Entry Point라고 한다.   
### 필수 옵션 3가지  
- --mode: ["development","production","none"] 과 같이 3가지 옵션을 선택할 수 있다.   
개발환경(development)이냐, 운영환경(production)이냐에 따라 옵션을 다르게준다.  
- --entry: 모듈의 시작점을 설정해주는 옵션이다.  
- --output, -o: entry를 통해서 모듈들을 합치고 저장하는 경로를 설정하는 옵션이다.  
&nbsp;  
