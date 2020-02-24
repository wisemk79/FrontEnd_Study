import {createStore} from 'redux';

//createStore라는 api를 이용해서 store를 만들때, reducer라는 함수를줘야한다. reducer는 인자로 state와 action을 받는다.
export default createStore((state, action)=>{
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        //state의 프로퍼티가 많을수 있으니, ...state로 모든 state를 가져오고 
        //기존state의 number값(state.number)과 store.dispatch({type:'INCREMENT',size:this.state.size})의 size값(action.size)를 더한다.
        return {...state, number : state.number + action.size}
    }
    return state;
})