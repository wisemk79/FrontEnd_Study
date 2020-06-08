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