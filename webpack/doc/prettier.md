# Prettier  
프리티어는 코드를 일관적인 스타일로 코드를 다듬는다.  
다만 코드품질과 관련된 기능을 하지 않는것이 eslint와 다른점이다.  
- 설치  
````
npm install -D prettier
````  
아래의 코드가 있다고 가정했을때,  
- prettier.js  
````
console.log('hello')
````
이 코드는 세미콜론이 없다, 하지만 일반적으로는 세미콜론을 넣어야하는데  
이것을 일일히 고치려면 모든줄을 확인해서 고쳐줘야하는 불편함이 있다.  
이때 도와주는 것이 프리티어인 것이다.  
- 실행  
````
npx prettier prettier.js --write
````
--write옵션을 주면 해당 파일을 직접 고쳐준다.  

### eslint와 prettier의 충돌  
eslint와 prettier를 같이 쓰는 각자의 스타일로 코드가 변경이 될텐데,  
이렇게되면 두개의 스타일이 충돌하는 경우가 생길 수 있다.  
이것을 해결해 줄 수 있는것이 eslint-config-prettier이다.  
- 설치  
````
npm install -D eslint-config-prettier
````
- eslintrc.js
````
module.exports={
    extends:[
        "eslint:recommended",
        "eslint-config-prettier" <---추가
    ],
    env:{
        commonjs:true,
        browser: true,
        node: true,
        es6: true
    }
}
````
아래와 같은 코드가 있다고 가정하자,
- prettier.js
````
var foo = ''

console.log('hello');;;;;;
````
foo 변수는 사용하지 않는 변수이기 때문에 코드 품질의 영역으로  
eslint가 오류를 감지할 것이고 console.log의 세미콜론 역시  
eslint가 고쳐줄 수 있다. 하지만 이것은 코드 스타일의 영역이기 때문에  
eslint가 고쳐주는걸 막는다. 왜냐하면 위에서 eslint-config-prettier로 충돌 설정을 해줬기 떄문이다.  
따라서 세미콜론 이슈는 프리티어가 고쳐줄 것이다.  
- 실행
````
npx eslint prettier.js --fix
````
- 결과  
````
/Users/wisemk/Desktop/study/webpack/sample/prettier.js
  1:5  error  'foo' is assigned a value but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)
````
eslint는 아래의 세미콜론이슈는 체크하지않고 코드스타일의 영역만 체크하는 것을 볼 수 있다.  
- 실행
````
npx prettier prettier.js --write
````
# eslint plugin  
위처럼 매번 2개의 코드를 사용하는것은 효율적이지 못하다.  
이를 보완해준것이 eslint만 실행해도 prettier까지 적용해주는 eslint-plugin-prettier이다.  
- 설치  
````
npm install -D eslint-plugin-prettier
````
- .eslintrc.js 
````
module.exports={
    extends:[
        "eslint:recommended",
        "eslint-config-prettier"
    ],
    env:{
        commonjs:true,
        browser: true,
        node: true,
        es6: true
    },
    plugins:{
        "prettier"
    },
    rules:{
        "prettier/prettier":"error"
    }
}
````

- 실행  
````
npx eslint prettier.js --fix
````