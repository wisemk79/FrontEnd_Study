import form from './form';
import result from './result';
import './app.css'

let resultEl;
let formEl;

document.addEventListener("DOMContentLoaded", async ()=>{
    formEl = document.createElement("div");
    formEl.innerHTML = form.render();
    document.body.appendChild(formEl);

    resultEl = document.createElement("div");
    resultEl.innerHTML = await result.render();
    document.body.appendChild(resultEl);
})

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