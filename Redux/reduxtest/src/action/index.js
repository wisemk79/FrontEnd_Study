//action의 타입을 정의하여 export
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

//카운터의 값을 올린다.
//increment의 action을 정의한다. 
export function increment(){
    return{
        type: INCREMENT
    }
}

//카운터의 값을 내린다.
//decrement의 action을 정의한다.
export function decrement(){
    return{
        type: DECREMENT
    }
}

//버튼이 눌릴 때 더하거나 뺄 값을 설정한다.
//seDiff action을 정의합니다. 어떤 값을 계산(더할 것인지 혹은 뺄 것인지) 해 줄 것인지를 diff에 저장됩니다. 
//나중에는 reducer에 의해 store에 저장됩니다.
export function setDiff(value){
    return{
        type: SET_DIFF,
        diff:value
    }
}
