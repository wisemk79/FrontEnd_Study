import axios from 'axios'
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ID = "SET_ID"
export const GET_AXIOS_DATA = "GET_AXIOS_DATA"

export const login = (data) => {
    return {
        type: LOGIN
    }
  }

  export const getAxiosData = (data) => {
    return {
        type: GET_AXIOS_DATA,
        data
    }
  }
  
  export const axiosLoginAction = () => {
      console.log("액션 실행")
    return (dispatch) => {
        return axios.get(`http://localhost:3000/articles`)
            .then(response => {
                console.log("엑시오스 실행", response.data)
                dispatch(getAxiosData(response.data))
            })
            .catch(error => {
                throw(error);
            });
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