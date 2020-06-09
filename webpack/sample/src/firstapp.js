import * as math from './math.js'
console.log(math.sum(1,2));

import './app.css'
import nyancat from './nyancat.jpg'
import axios from 'axios'

//DOMContentLoaded dom이 로드되면 이미지 태그를 노출시킨다.
document.addEventListener('DOMContentLoaded', async ()=>{
    const res = await axios.get('/api/users')
    var arr = [
        {
            id:1,
            name:"add"
        },
        {
            id:2,
            name:"bbb"
        }
    ]
    
    document.body.innerHTML = (res.data || []).map((user)=>{
    return`
    <div>${user.id}:${user.name}</div>
    <img src="${nyancat}"/>
    `
    })
})

console.log(process.env.NODE_ENV);// developement <--config의 mode 속성값을 가져온다.
console.log(TWO);//2
console.log(TWOSTRING)// 1+1
console.log(api.domain)//http://dev.api.domain.com

const alert = msg => window.alert(msg);

new Promise();//es6에 있는 객체  