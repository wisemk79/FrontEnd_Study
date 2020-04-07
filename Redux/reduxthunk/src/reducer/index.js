import {LOGIN, LOGOUT, SET_ID} from '../action'
//combineReducers 를 import 합니다. combineReducers는 reducer가 여러개 있다면, 하나로 합쳐주는 메소드입니다.
import {combineReducers} from 'redux'

const loginInitialState = {
    id: "초기상태"
}

const logger = (state = loginInitialState, action)=>{
    switch(action.type){
        case LOGIN:
            return Object.assign({}, state, {
                id: "abcde"
            })
        case LOGOUT:
            return Object.assign({}, state, {
                id: "로그아웃"
            })
        case SET_ID:
            return Object.assign({}, state, {
                id: action.id
            })
        default:
            return state;
    }
}

const loginApp = combineReducers({
    logger
})

export default loginApp;