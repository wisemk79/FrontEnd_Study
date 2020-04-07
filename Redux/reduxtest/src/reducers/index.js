//action에서 정의한 action의 type들을 import합니다.
import { INCREMENT, DECREMENT, SET_DIFF } from '../action';
//combineReducers 를 import 합니다. combineReducers는 reducer가 여러개 있다면, 하나로 합쳐주는 메소드입니다.
import { combineReducers } from 'redux';

//state의 초기값을 정의 합니다.
const counterInitialState = {
    value: 0,
    diff: 1
};

//counter의 reducer입니다.
//default parameter을 이용하여 state가 undefined로 넘어 올 경우 초기 state를 설정해 줍니다.
const counter = (state = counterInitialState, action) => {
    
    //state를 변경시키지 않고, Object.assign 메소드를 통해 state를 복사하여, 
    //복사한 객체를 수정하여 리턴합니다. Redux에서 state는 읽기 전용이여야 합니다.
    switch(action.type) {
        //action.type에 따라 reducer가 동작하는 부분입니다.
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

//combineReducer를 사용하는 방법
// 작성한 reducer을 하나로 합쳐줍니다.
//combineRecucers 메소드는 여러개의 reducer을 하나로 합쳐주는 메소드입니다. 
//현재 예시는 하나의 reducer만 필요하기 때문에 위와 같이 작성 되었지만, 여러개의 reducer가 있다면, 아래와 같이 작성 하시면 됩니다.
const counterApp = combineReducers({
    counter,
    extra
});


//reducer을 export 합니다.
export default counterApp;