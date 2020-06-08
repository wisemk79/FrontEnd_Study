import * as math from './math.js'
console.log(math.sum(1,2));

import './app.css'
import nyancat from './nyancat.jpg'

//DOMContentLoaded dom이 로드되면 이미지 태그를 노출시킨다.
document.addEventListener('DOMContentLoaded', ()=>{
    document.body.innerHTML = `
    <img src="${nyancat}"/>
    `
})

console.log(process.env.NODE_ENV);// developement <--config의 mode 속성값을 가져온다.
console.log(TWO);//2
console.log(TWOSTRING)// 1+1
console.log(api.domain)//http://dev.api.domain.com

const alert = msg => window.alert(msg);

new Promise();//es6에 있는 객체  