//로더는 함수형태로 작성한다.
// module.exports = function myWebpackLoader(content){
//     console.log('myWebpackLoader 동작함')
//     return content;
// }


module.exports = function myWebpackLoader(content){
    console.log('로더 동작')
    return content.replace('console.log(', 'alert(');//모든 console.log()를 alert으로 바꾼다
}