# Babel  
## 크로스 브라우징  
크로스 브라우징 이슈란 브라우저 마다 사용하는 언어가 달라 어떤 브라우저에서는  
일관성있게 다른 메소드를 사용하지 못하거나하는 상황이 발생하는 경우를 의미한다.  
예를들어 사파리 브라우저에서는 Promise.prototype.finally 메소드를 사용할 수 없었던 이슈들을 말한다.
이러한 상황을 해결해줄 수 있는 것이 바벨이며, 바벨은 ECMAScript로 작성한 코드를  
모든 브라우저에서 동작하도록 호환성을 지켜준다. 타입스크립트, jsx등의 언어도 마찬가지로 호환성을 지켜준다.  
### 바벨의 설치 방법 
- 설치  
````
npm install @babel/core @babel/cli

npx babel app.js// npx로 코드를 실행해 볼 수 있다.
````  
### 바벨의 빌드 진행 순서 3가지  
1. 파싱(Pasing)  
코드를 받아서 각 토큰별로 분해한다.  
이 이야기는 예를들어  
````
const alert = msg => window.alert(msg)
````
위의 코드를 보면 const라는 토큰이 있고 alert이라는 토큰이있고 =이라는 토큰 등등 이 있을때,  
그 하나하나의 토큰으로 분해하는데 이것을 파싱이라고한다.  
2. 변환(Transforming)   
ES6로 이루어진 코드를 ES5로 변환하는 단계이다.  
3. 출력(Printing)  
그 변환된 결과를 출력한다.  
### 바벨의 커스텀 플러그인  

- my-babel-plugin.js
````
module.exports = function myBabelPlugin(){
    // 커스텀플러인은 visitor 라는 객체를 갖고있는 객체를 반환해야한다.
    return{
        visitor:{
            //visitor 객체에는 Identifier라는 객체가 들어있는데, 
            //Identifier는 path라는 객체를 받는데 그것을 바벨이 넣어준다.
            //이것은 path.node.name을 통해서 파싱된 결과물에 접근할 수 있다.
            Identifier(path){
                const name = path.node.name;

                // 바벨이 만든 AST 노드를 출력한다 <--파싱된 결과물 출력
                console.log("Identifier name: ", name)

                // 변환작업: 코드의 문자열을 역순으로 변환한다. <--아래의 코드는 파싱된 토큰들을 역순으로 출력하는코드
                 path.node.name = name 
                 .splite('')
                 .reverse()
                 .join('');
            }
        }
    }
  };
````

- plugin 실행방법  
````
npx babel app.js --plugins './my-babel-plugin.js'
````

- 변환 작업을 안한 결과물  
````
Identifier name:  alert
Identifier name:  msg
Identifier name:  window
Identifier name:  alert
Identifier name:  msg
const alert = msg => window.alert(msg);
````  
- 변환작업을 한 결과물  
````
Identifier name:  alert
Identifier name:  msg
Identifier name:  window
Identifier name:  alert
Identifier name:  msg
const trela = gsm => wodniw.trela(gsm);
````
- my-babel-plugin2.js
````

module.exports = function myBabelPlugin(){
    return{
        visitor:{
            //파싱된 결과를 path로 받는다.
            VariableDeclaration(path){
                console.log('VariableDeclaration() kind:',path.node.kind)// const와 같은 변수 선언된것을 찾음 

                if(path.node.kind === 'const'){//path.node.kind의 값이 const면 var로 변환해준다.
                    path.node.kind = 'var'
                }
            }
        }
    }
  };
````  

### block-scope-plugin  
블록스코프 플러그인이란 지역변수로 선언한 let과 같은것을 var로 변환해준다.
예를들면 아래와같이  
````
{
    let a = 3
}

let a = 3
````
위의 코드를 아래와 같이 변환 시켜준다. 
````
{
    var _a = 3
}

var a = 3
````

- 설치 및 실행
````
npm install @babel/plugin-transform-block-scoping

npx babel app.js --plugins @babel/plugin-transform-block-scoping
````

- 결과  
````
var alert = msg => window.alert(msg);
````
const였던 코드를 var로 변환시켜준다.

### arrow function  
위와 마찬가지로 => arrow function을 원래 함수 형태로 변환해줄 필요성이있다.  
그것을 아래와 같이해준다.
- 설치 및 실행
````
npm install @babel/plugin-transform-arrow-functions

npx babel app.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-arrow-functions
````

- 결과  
````
var alert = function (msg) {
  return window.alert(msg);
};
````
두개의 코드를 사용하여 결과적으로 const를 var로 변환시키고,  
arrow function을 원래 function 형태로 변환시켜준다.  

### strict mode  
자바스크립트는 기본적으로 느슨한 모드(sloppy mode)로 되어있는데, 이를 엄격 모드로 설정해준다.  
엄격 모드란 평범한 JavaScript 시멘틱스에 몇가지 변경이 일어나게 한다.

1. 기존에는 조용히 무시되던 에러들을 throwing한다.  
2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡는다.  
가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어진다.
3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지한다.
- 설치 및 실행
````
npm install @babel/plugin-transform-strict-mode

npx babel app.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-arrow-functions --plugins @babel/plugin-transform-strict-mode
````

- 결과  
````
"use strict";

var alert = function (msg) {
  return window.alert(msg);
};
````


# 바벨 설정 babel.config.js  
위처럼 매번 커멘드를 치면 점점 플러그인이 많아질 수록 코드가 길어질 것이다.  
이를 설정해주는 파일을 하나 만들어주는데 babel.config.js를 만들어 보자.  

- babel.config.js
````
module.exports = {
    plugins: [
        '@babel/plugin-transform-block-scoping',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-strict-mode'
    ]
}
````
- 실행  
````
npx babel app.js
````
- 결과  
````
"use strict";

var alert = function (msg) {
  return window.alert(msg);
};
````

### 프리셋  
ES6로 코딩할때 필요한 플러그인을 일일히 설정하는 것은 비효율적이다.  
만약 이렇게한다면 플러그인 마다 세팅을 해줘야되는 상황이 되는데,  
이렇게 하지않고 목적에 맞게 여러가지 플러그인을 모아놓은것을 프리셋이라고한다.  

- my-babel-preset.js  <--프리셋에 아래와 같이 세팅을 해놓고 babel.config.js에서 세팅해준다.
````
module.exports = function myBabelPreset(){
    return{
        plugins: [
            '@babel/plugin-transform-block-scoping',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-strict-mode'
        ]
    }
}
````

- babel.config.js  
````
module.exports = {
    presets: [
        './my-babel-preset.js'
    ]
}
````

# 대표적인 프리셋  
바벨은 목적에 따라 몇 가지 프리셋을 제공한다.  
### 종류  
1. preset-env   
2. preset-flow  
3. preset-react  
4. preset-typescript  


### preset-env  
Es6등의 코드들을 변환할 때 사용하는 프리셋이다.  
````
npm install @babel/preset-env
````

- babel.config.js  
````
module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
````

- 실행 및 결과  
`````
npx babel app.js

"use strict";

var alert = function alert(msg) {
  return window.alert(msg);
};
`````  
### 타겟 브라우저  
프리셋으로 변환하는 코드가 특정 브라우저를 지원할 수 있도록 설정해준다.  
- babel.config.js  
````
module.exports = {
    presets: [
        // './my-babel-preset.js'
        ['@babel/preset-env',
        {
            targets:{
                chrome: '79',//크롬 79까지 지원하는 코드를 만든다. 
                ie: '11'
            }
        }]
    ]
}
````
- 결과  
````
"use strict";

const alert = msg => window.alert(msg);
````
위의 결과를 보면 크롬 79버전 부터는 const와 arrow function을 사용할 수 있기 때문에  
따로 변환시키지 않는 것을 볼 수 있다.  

### 폴리필  
바벨은 es6코드를 es5로 변환 가능한것 만을 변환 시킬수 있다.  
예를들어 new Promise() 객체는 es5에서 변환될 수 없기 때문에 오류를 발생시킨다.  
이 처럼 변환되지 않는 것을 폴리필이라는 코드조각을 추가하여 해결한다.  

- babel.config.js  
````
module.exports = {
    presets: [
        // './my-babel-preset.js'
        ['@babel/preset-env',
        {
            targets:{
                chrome: '79',//크롬 79까지 지원하는 코드를 만든다. 
                ie: '11'
            },
            //어떤 방식으로 폴리필을 사용할지 설정하는 옵션('usage', 'entry', false <--기본값)
            useBuiltIns: 'usage', //'entry', false
            corejs: {//corejs버전을 설정
                version: 2 // 3이있는데 2가 기본버전이다.
            }
        }]
    ]
}
````

- 결과  
````
"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

var alert = function alert(msg) {
  return window.alert(msg);
};

new Promise(); //es6에 있는 객체
````
promise 객체가 정상적으로 require로 가져와진다.

# 웹팩으로 바벨을 통합 시키는 법  
실무 환경에서는 바벨을 직접 사용하는 것 보다는 웹팩으로 통합해서 사용한다.  
로더 형태로 제공하는데 babel-loader가 그것이다.  
- 패키지 설치  
````
npm install -D babel-loader
````
- webpack.config.js  
````
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ 
                //node_modules에 대해서는 바벨 처리를 하지 않도록한다.
            }
````
로더 설정을 위처럼 해주고 빌드해줘도 아래와 같은 오류가 발생하게된다.  
- 에러메세지  
````
ERROR in ./app.js
Module not found: Error: Can't resolve 'core-js/modules/es6.object.to-string' in '/Users/wisemk/Desktop/study/webpack/sample'
 @ ./app.js 2:0-46
````
위의 메세지는 core-js라는 모듈을 찾을 수 없기 때문에 발생하는 오류이다.  
따라서 core-js를 설치해줘야한다.  
````
npm install core-js@2 // 2버전을 설치한다.
````