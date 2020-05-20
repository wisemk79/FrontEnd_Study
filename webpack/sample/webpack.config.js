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
    }
}