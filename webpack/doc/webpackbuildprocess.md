# Webpack 빌드 순서  
1. npm init으로 package.json 파일생성  
2. npm install로 webpack 설치  
````
//개발환경 설치
npm install -D webpack webpack-cli
````  
3. package.json script에 명령어 정의  
`````
{
  "name": "lecture-frontend-dev-env",
  "version": "1.0.0",
  "description": "\"프론트엔드 개발 환경의 이해\" 강의 자료입니다.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  <----이렇게 정의
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jeonghwan-kim/lecture-frontend-dev-env.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/jeonghwan-kim/lecture-frontend-dev-env/issues"
  },
  "homepage": "https://github.com/jeonghwan-kim/lecture-frontend-dev-env#readme",
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  }
}
`````  
4. 폴더 최상위에 webpack.config.js 파일 생성하여 정의하기  
````
const path = require('path')
module.exports = {
    mode: "development", <--개발환경으로 설정
    entry: { <--모듈 시작점
        main: './src/app.js'
    },
    output:{ <--파일 생성위치 및 파일명
       path: path.resolve('./dist'),
       filename: '[name].js'
    }
}
````