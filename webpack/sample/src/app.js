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