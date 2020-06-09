# Webpack Dev Server  
- 설치  
````
npm install webpack-dev-server
````
- package.json에 dev server 실행 스크립트 만들기  
````
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "print": "echo \"여기에 빌드 스크립트를 추가합니다.\"",
    "build": "webpack",
    "lint": "eslint src --fix",
    "start": "webpack-dev-server"
  },
````

- webpack.config.js  
````
module.exports = {
  devServer:{
    contentBase: path.join(_dirname, "dist),
    publicPath: "/",
    host: "dev.domain.com",
    overlay: true,
    port: 8081,
    stats: "errors-only",
    historyApiFallback: true,
  }
}
````
1. contentBase  
정적파일을 제공할 경로. 기본값은 웹팩의 아웃풋 경로이다.  
2. publicPath  
브라우저를 통해 접근하는경로, url로 접근하는 경로를 의미한다.  
3. host  
개발환경에서 도메인을 맞추어야하는 상황에서 사용한다.  
예를들어 쿠키 기반의 인증은 인증서버와 동일한 도메인으로 개발환경을 맞춰야한다.  
운영체제의 호스트파일에 해당 도메인과 127.0.0.1 연결하고 추가한뒤 host속성에 도메인을 설정해서 사용한다.  
4. overlay  
빌드시 에러나 경고를 브라우저의 화면에 표시한다.  
5. port  
개발서버의 포트 번호를 설정한다. 기본은 8080  
6. stats  
메세지의 수준을 설정할 수 있다. 'none', 'error-only', 'minimal',  
'normal', 'verbose'로 메세지의 수준을 조절한다.  
7. historyApiFallback  
히스토리의 API를 사용하는 SPA 개발시 설정한다. 404가 발생하면 index.html로 리다이렉트한다.  

- webpack.config.js
````
  devServer:{
    overlay:true,
    stats:"errors-only"
  },
````
- package.json
````
"scripts": {
    "start": "webpack-dev-server --progress"
  },
````
--progress 라는 속성을 사용하면 빌드 진행 퍼센트를 볼 수 있다.  
### API 연동  
#### api server 만들기  
- webpack.config.js
````
  devServer:{
    overlay:true,
    stats:"errors-only",
    before: app => {
      app.get("/api/users", (req,res)=>{
        res.json([
          {
            id:1,
            name:"Alice"
          },
          {
            id:2,
            name:"Jack"
          },
          {
            id:3,
            name:"Sara"
          },
        ])
      })
    }
  },
````
before라는 함수를 devServer객체에 추가할 수 있는데,   
app이라는 객체를 전달해주는데 app은 서버 객체를 의미한다.  
이 서버객체라는 것은 webpackDevServer, 즉 웹팩 개발서버를 의미한다.  
app.get이하의 코드는 express.js 프레임워크의 코드와 같은 것이다.  
express.js의 인스턴스를 devserver에 넣어주는 구조라고 생각하면된다.  
/api/users라는 api로 get요청이 들어오게되면 뒤의 콜백함수를 실행하는데,  
이때 res.json, 즉 응답으로 res.json안의 객체를 json 형태로 보내주는 구조이다.  
- api 요청 보내서 제대로 작동하는지 확인  
````
url에 /api/users를 붙히면 끝 
ex) http://localhost:8081/api/users
```` 
- 화면 출력  
````
[{"id":1,"name":"Alice"},{"id":2,"name":"Jack"},{"id":3,"name":"Sara"}]
````
### axios 요청으로 api 호출해보기  
- 설치  
````
npm install axios
````
- app.js
````
import * as math from './math.js'
console.log(math.sum(1,2));

import './app.css'
import nyancat from './nyancat.jpg'
import axios from 'axios'

//DOMContentLoaded dom이 로드되면 이미지 태그를 노출시킨다.
document.addEventListener('DOMContentLoaded', async ()=>{
    const res = await axios.get('/api/users')
    console.log(res)

    document.body.innerHTML = (res.data || []).map((user)=>{
    return`
    <div>${user.id}:${user.name}</div>
    <img src="${nyancat}"/>
    `
    })
})

````
### connect-api-mocker  
api 작업이 많은 경우에는 connect-api-mocker를 사용한다.  
- 설치  
````
npm install connect-api-mocker
````

- 폴더를 구성한다. 
mocks - api - users - GET.json 파일을 생성한다.  
이렇게하면 아까의 /api/users api주소랑 같은 의미가된다.  

- webpack.config.js  
````
const apiMocker = require('connect-api-mocker')
before: app => {
      app.use(apiMocker('/api', 'mocks/api'))
    }
  }
````
app.use를 사용하면 미들웨어를 사용할수 있고, apiMocker를 추가한다.  
첫번째는 루트 url로 /api로 요청오는것은 이 모커가 모든걸 처리하고  
두번째 인자로는 pathroot를 주는데 이는 아까만든 mocks폴더의 루트를 작성해준다.  

## CORS 이슈  
만약 현재 서버와 다른 도메인 서버에 api요청을 보내면 브라우저가 도메인이 다르다는것을 인지하고  
차단해 버리는데, 이게 바로 CORS 에러 이슈이다.  
해결방법은 두가지가 있는데 다음과 같이 처리한다.  
1. 서버측에서 해결하는 방법  
server/index.js  
````
app.get('api/keywords',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.json(keywords);
})
````
위의 코드를 보면 응답을 keywords라는 json 형태로 보내는것이 있지만  
제일 중요한것은 Access-Control-Allow-Origin이다.  
헤더에 Access-Control-Allow-Origin를 *(모든것을 허용) 메세지를  
담아서 보내줌으로서 도메인에 접근하는 것을 허용시키도록한다.  

2. 웹팩 개발 서버에서 api 서버로 프록싱하는 방법  
- webpack.config.js  
````
  devServer: {
    overlay: true,
    stats: "errors-only",
    // TODO: 여기에 api 서버 프록싱 설정을 추가하세요
    proxy:{
      '/api': 'http://localhost:8081', // 프록시
    },
    port:8090
  },
````

# 핫 모듈 리플레이스먼트   
HMR은 브라우저를 새로 고치지 않아도 웹팩으로 빌드한 결과물이 웹 애플리케이션에   
실시간으로 반영될 수 있게 도와주는 설정입니다. 브라우저 새로 고침을 위한 LiveReload    
대신에 사용할 수 있으며 웹팩 데브 서버와 함께 사용할 수도 있습니다.   
- webpack.config.js  
````
  devServer:{
    hot:true // 핫 모듈 리플레이스먼트 활성화
  }
````
- app.js 
````

if(module.hot){
    console.log('핫 모듈 켜짐');

    module.hot.accept("./result", async ()=>{
        console.log("result 모듈 변경됨")
        resultEl.innerHTML = await result.render();
        //resultEl.innerHTML에다가 업데이트된 result 모듈의 렌더함수의 결과를 넣어준다. 
    })

    module.hot.accept("./form", ()=>{
    console.log("form 모듈 변경됨")
    formEl.innerHTML = form.render();
    })
}
````
만약 result 모듈 코드에 어떤 내용이 변경되면 그것을 감지하여 다음 함수를 실행한다.  
이는 module.hot.accept 함수로인 해서 발생한다.    
위와 같이 inneHTML에 직접 렌더된 결과를 넣어주면 해당 모듈만 업데이트가되고  
다른 모듈은 리렌더되지 않는다.   
예를들어 result 모듈과 form 모듈이 있는데,  
result 모듈의 내용이 바뀌면 result 모듈만 다시 렌더되고,  
form 모듈의 내용은 리렌더 되지 않는다.  
### style-loader 적용  
핫 true를 적용시켜주면 css에도 적용되는데 예를들어 백그라운드 컬러를 변경하면  
백그라운드 컬러 css만 바뀌고 다른 모듈은 리렌더되지 않는다.  

# 최적화  
### production 모드  
웹팩에 내장되어있는 최적화 방법중 mode 값을 설정하는 방법이있다.  
- webpack.config.js  
````
const mode = process.env.NODE_ENV || "development";

//module.exports는 노드의 모듈 시스템이다.
module.exports = {
  mode: mode,
````
process.env.NODE_ENV는 노드의 모드 상태를 의미하는데 이를 직접  
package.json에서 주입해줄 것이다.  
- package.json  
````
  "scripts": {
    "build": "NODE_ENV=production webpack --progress"
  },
````
위와같이해서 프로덕션 모드로 빌드를 하면 프로덕션 모드의 7개의 플러그인에의해서  
main.js가 난독화되어 최적화가 된다.  
### optimization 속성으로 최적화   
빌드과정을 커스터마이징 할 수 있는 여지를 제공하는 것이 optimization 속성이다.  
여기서 만약 css파일을 빈칸이 없이 압축하고싶다면 어떻게 해야될까?  
optimize-css-assets-webpack-plugin이 이를 도와준다.  
- 설치  
````
npm i optimize-css-assets-webpack-plugin
````
- webpack.config.js  
````
const OptimizeCSSAssertsPlugins = require('optimize-css-assets-webpack-plugin');
  optimization:{
    minimizer: mode === "production" ? [new OptimizeCSSAssertsPlugins()] : []
  },
````
프로덕션 빌드일 때 new OptimizeCSSAssertsPlugins()을 사용한다.  
이렇게 하면 css파일 역시 난독화 되어 파일이 최적화된다.  

### TerserWebpackPlugin   
자바스크립트 코드를 난독화하고 debugger구문을 제거한다.  
기본 설정외에도 콘솔로그를 제거하는 옵션도 있다.  
- 설치  
````
npm i terser-webpack-plugin
````
- webpack.config.js  
````
const TerserPlugin = require('terser-webpack-plugin');

  optimization:{
    minimizer: mode === "production" ? [
      new OptimizeCSSAssertsPlugins(),
      new TerserPlugin({
        terserOptions:{
          compress:{
            drop_console: true // 콘솔로그를 제거
          }
        }
      })
    ] : []
````

### 코드 스플리팅  
하나의 코드 파일이 큰경우 브라우저의 다운로드 속도가 느리다.  
이를 더 보완하기 위해선 코드 파일을 분리하는 법이 있는데 그것이 코드 스플리팅이다.  
기본적으로 엔트리 포인트를 여러개로 나누는 법이있다.  

- webpack.config.js  
````
module.exports = {
  mode,
  entry: {
    main: "./src/app.js",
    result: "./src/result.js",
    form: "./src/form.js"
  },
````

### splitChunks  
위처럼 하면 코드가 분리되지만 main.js와 result.js에 중복 코드가 발생하는 현상이 생긴다.  
예를들어 axios를 import했다면 그것이 main.js에서 import를 하고있는데 result.js에서도 import하는 현상이다.  
이러한 현상을 해결하기위해서 있는것이 splitChunks 속성이다.  
- webpack.config.js 
````
  optimization:{
    minimizer: mode === "production" ? [
      new OptimizeCSSAssertsPlugins(),
      new TerserPlugin({
        terserOptions:{
          compress:{
            drop_console: true // 콘솔로그를 제거
          }
        }
      })
    ] : [],
    splitChunks:{ 
      chunks:"all" //이 코드를 추가해주면 중복코드를 제거해준다.
    }
  },
````

### 다이나믹 임포트  
위처럼 엔트리 포인트를 일일히 해주는것은 매우 번거로운 일이다.  
따라서 위의 행위를 자동화 해주는것이 필요한데, 그것이 다이나믹 임포트이다.  
- app.js 
````
import form from './form';
// import result from './result';
import './app.css'

let resultEl;
let formEl;

document.addEventListener("DOMContentLoaded", async ()=>{
    formEl = document.createElement("div");
    formEl.innerHTML = form.render();
    document.body.appendChild(formEl);

    import(/* webpackChunkName: "result" */"./result.js").then(async m =>{
        const result = m.default;
        resultEl = document.createElement("div");
        resultEl.innerHTML = await result.render();
        document.body.appendChild(resultEl);
    })

})
````

기존에 result.js를 따로 임포트 했다면, 이번에는 import를 해줄때  
특별한 주석을 넣어준다 /* webpackChunkName: "result" */ 이런식으로 넣어주면,  
이것을 인식해서 result라는 엔트리 포인트를 자동으로 생성하여 파일을 따로 번들링해준다.  
- webpack.config.js 
````


  optimization:{
    minimizer: mode === "production" ? [
      new OptimizeCSSAssertsPlugins(),
      new TerserPlugin({
        terserOptions:{
          compress:{
            drop_console: true // 콘솔로그를 제거
          }
        }
      })
    ] : [],
    // splitChunks:{// 다이나믹 임포트를 쓸떄는 청크옵션을 제거한다.
    //   chunks:"all"
    // }
  },
````

### externals  
axios 같은 써드파티 라이브러리의 경우 패키지로 제공될 때  
이미 빌드과정을 거쳤기 때문에 빌드 프로세스에서 제외하는것이 좋다.  
웹팩에서 externals가 이러한 기능을 제공한다.  
- webpack.config.js
````
  optimization:{
    minimizer: mode === "production" ? [
      new OptimizeCSSAssertsPlugins(),
      new TerserPlugin({
        terserOptions:{
          compress:{
            drop_console: true // 콘솔로그를 제거
          }
        }
      })
    ] : [],
    // splitChunks:{
    //   chunks:"all"
    // }
    externals: {
      axios : 'axios'
    }
  },
````
externals 옵션을 적용한 뒤 node_modules에서 해당 라이브러리를 가져와야하는데,  
그때 사용하는것이 copy-webpack-plugin이다.  
- 설치  
````
npm i copy-webpack-plugin
````
- webpack.config.js
````
const CopyPlugin = require('copy-webpack-plugin');

plugins: [
    new CopyPlugin({
    patterns: [
      {
        from: './node_modules/axios/dist/axios.min.js',
        to: './axios.min.js'
      }
    ],
    })
  ]
````
플러그인스 배열에 추가한다. 다만 이것을 사용하면 externals 옵션을 제거해줘야한다.   
- index.html  
전역 객체로 사용하기위해 index.html에서 추가한다.  
````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document <%= env%></title>
</head>
<body>
    <script type="text/javascript" src="axios.min.js"></script>
</body>
</html>
````