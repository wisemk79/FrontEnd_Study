const path = require('path')

//module.exports는 노드의 모듈 시스템이다.
module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),//output 디렉토리명을 입력. 절대경로를 입력하는데, 노드의 path 모듈을 import하여 사용한다.
        filename: '[name].js'//여기서 name은 entry에서 설정한 키값으로 치환되어 main.js로 생기게된다.
    },
    // 로더는 모듈객체에 rules라는 배열에다 추가할 수 있다.
    // 이 배열에는 test와 use라는 키를 갖는 객체를 사용한다.
    module:{
        rules:[
            {   //정규표현식으로 모든 js파일에 대해 동작을 시켰기 때문에 2번 실행된다.
                test: /\.js$/,//로더가 처리해될 패턴을 입력한다(정규식)
                use: [//사용할 로더를 정의한다.
                    path.resolve('./my-webpack-loader.js')
                ]
            } 
        ]
    }
}