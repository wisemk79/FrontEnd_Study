import log, { getTime, getCurrentHour, MyLogger} from './myLogger';//mylogger.js의 log메소드를 불러다 쓰기위해 import를해준다. <--export한걸 갖다 쓰기위해 distructuring을 해준다
import _ from './utility';
//import {log} from `./myLogger`; 만약 {}중괄호를 빼고 싶다면 mylogger.js에서 export default로 설정해줘야한다.


// const root = document.querySelector('#root');
// root.innerHTML = `<p>Hello World ! </p>` 백틱(Backtick)문자열로 javascript 값을 ${}로 끼워넣을수있다.

const logger = new MyLogger();
_.log(`lectures of codesquad are ${logger.getLectures()}`)

_.log("my first data");
_.log(`getTime is ${getTime()}`);
_.log(`current hour is ${getCurrentHour()}`);