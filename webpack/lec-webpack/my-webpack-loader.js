//로더는 함수형태로 작성한다.
module.exports = function myWebpackLoader(content){
    console.log('myWebpackLoader 동작함')
    return content;
}
