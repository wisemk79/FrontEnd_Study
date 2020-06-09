# ESLint  
개념: ESLint는 ECMAScript 코드에서 문제점을 검사하고  
일부는 더 나은 코드로 정정하는 린트 도구중 하나이다.  
ESLint가 코드에서 검사하는 항목은 두가지이다.  
1. 포맷팅  
2. 코드품질  
- 설치  
````
    npm install eslint
````
### eslint 사용법  
- 실행  
````
npx eslint eslint.js
````
위처럼 실행하면 eslint가 실행될것이라 생각할 수도 있지만  
사실 eslint 역시도 configuration파일이 기본적으로 있어야한다.  
eslint는 작동방식이 설정파일을 읽고 eslint를 실행한다.   
- .eslintrc.js  
### 규칙(Rules)  
eslint 설정파일에는 rules라는 속성이 있는데 코드를 검사하는 규칙을 의미한다.  
규칙의 종류는 eslint의 rules 문서에서 확인할 수 있다.  
- .exlintrc.js  
````
module.exports={
    rules:{
        'no-unexpected-multiline':'error'
    }
}
````

- eslint.js 파일 코드  
````
console.log() 
(function(){})
````
- 결과값  
````
/Users/wisemk/Desktop/study/webpack/sample/eslint.js
  2:1  error  Unexpected newline between function and ( of function call  no-unexpected-multiline

✖ 1 problem (1 error, 0 warnings)
````
위의 오류메세지의 의미는 함수와 괄호 사이에 기대하지 않은 줄바꿈이 있다는 의미이다.   
- eslint.js 파일 코드  
````
console.log();
(function(){});
````
위와 같이 고친다면 에러메세지가 없어질 것이다.  
- eslint.js 파일 코드  
````
console.log();;;;;;;;
(function(){});
````
만약 위와 같이 한다면 자바스크립트에선 오류는 아니지만  
깨끗한 코드는 아니기 때문에 따로 처리해줘야하는데 그것을 eslint가 해준다.  
- .exlintrc.js  
````
module.exports={
    rules:{
        'no-unexpected-multiline':'error',//줄바꿈 오류 잡는것
        'no-extra-semi':'error'// 세미콜론 오류 잡는것
    }
}
````
- 결과  
````
/Users/wisemk/Desktop/study/webpack/sample/eslint.js
  1:15  error  Unnecessary semicolon  no-extra-semi
  1:16  error  Unnecessary semicolon  no-extra-semi
  1:17  error  Unnecessary semicolon  no-extra-semi
  1:18  error  Unnecessary semicolon  no-extra-semi

✖ 4 problems (4 errors, 0 warnings)
  4 errors and 0 warnings potentially fixable with the `--fix` option.
```` 
- --fix 옵션  
eslint에서 --fix 옵션을 사용해주면 자동으로 코드를 고쳐준다.  
다만, 위처럼 에러메세지에서 --fix가 나오면 자동으로 eslint가 고칠 수 있는 에러이지만  
따로 저런 메세지가 없다면 개발자가 직접 고쳐야하는 에러이다.
````
npx eslint eslint.js --fix
````
### extends  
위처럼 rules를 일일히 설정해줘도 되지만 이런것들을 단위로 묶어 놓은것이 있는데,  
그것이 extends 옵션이다.  
- eslintrc.js  
`````
module.exports={
    extends:[
        "eslint:recommended"
    ],
    env:{// "eslint:recommended" 적용했을 때 생기는 오류들을 해결할 수 있다.
        commonjs:true,
        browser: true,
        node: true,
        es6: true
    }
    // rules:{
    //     'no-unexpected-multiline':'error',//줄바꿈 오류 잡는것
    //     'no-extra-semi':'error'// 세미콜론 오류 잡는것
    // }
}
`````
### exlint 파일 자동 생성  
````
npx eslint --init
````
위의 명령어를 사용하면 질의 응답을 통해서 설정파일을 만들 수 있다.  
