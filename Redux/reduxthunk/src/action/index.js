export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ID = "SET_ID"

export function login(){
    return{
        type:LOGIN
    }
}

export function logout(){
    return{
        type:LOGOUT
    }
}

export function setId(value){
    return{
        type:SET_ID,
        id:value
    }
}