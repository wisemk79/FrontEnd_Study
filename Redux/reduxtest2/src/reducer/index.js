import {LOGIN, LOGOUT, SET_DATA, GET_AXIOS_DATA, POST_AXIOS_DATA} from '../action'
//combineReducers 를 import 합니다. combineReducers는 reducer가 여러개 있다면, 하나로 합쳐주는 메소드입니다.
import {combineReducers} from 'redux'
import { withCookies, useCookies } from 'react-cookie'

const loginInitialState = {
    id: "초기값",
    isLogged:false,
    list:"",
    session:"없음.",
    data: "데이터없음"
}

const logger = (state = loginInitialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                id: "abcde",
                isLogged:true
            }
        case LOGOUT:
            return {
                ...state,
                id: "",
                isLogged:false,
                session:""
            }
        case GET_AXIOS_DATA:
            return  {
                ...state,
                list: action.data
            }
        case POST_AXIOS_DATA:
            return {
                ...state,
                id: action.data.id,
                isLogged: action.data.isLogged,
                session: action.data.session
            }
        case SET_DATA:
            console.log("셋데이타실행",action.data.data)
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

const loginApp = combineReducers({
    logger
})

export default loginApp;