const path = require('path')
module.exports = {
    mode: "development",
    entry: {
        main: './src/app.js'
    },
    output:{ 
       path: path.resolve('./dist'),
       filename: '[name].js'
    },
    // 로더는 모듈객체에 rules라는 배열에다 추가할 수 있다.
    // 이 배열에는 test와 use라는 키를 갖는 객체를 사용한다.
    module:{
        rules:[
            {
                test: /\.js$/,//로더가 처리해될 패턴을 입력한다(정규식)
                use: [//사용할 로더를 정의한다.
                    path.resolve('./my-webpack-loader.js')
                ]
            }
            
        ]
    }
}