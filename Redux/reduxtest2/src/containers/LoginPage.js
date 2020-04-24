import React, {useState, useEffect} from 'react'
import Login from '../components/Login'
import {setData, login, logout, getAxiosAction, postAxiosAction} from '../action'
import {connect} from 'react-redux'
import { withCookies, useCookies } from 'react-cookie'

function LoginPage(props, {location, history}) {
    console.log(props.data, location)
    const {cookies} = props;
    const [datas, setDatas] = useState("")

    useEffect(() => {
        if(!datas){
            setDatas(
                {
                    id: props.id,
                    isLogged: props.isLogged,
                    list: props.list,
                    session: props.session,
                    data:props.data
                }
            )
        }else if(datas.id !== props.id || datas.list !== props.list || datas.data !== props.data){

            cookies.set("user_id", props.id)
            cookies.set("user_isLogged", props.isLogged)
            setDatas(
                {
                    id: props.id,
                    isLogged: props.isLogged,
                    list: props.list,
                    session: props.session,
                    data: props.data
                }
            )
        }
    })

    const idChange = (event) => { 
        props.onUpdateId(event.target.value); 
    } 

    const handleSubmit = () => {
        props.getData("dsdsds")
        console.log(props.data)
    }
    return (
        <div>
            {datas && 
            <Login 
                onSubmit={handleSubmit}
                datas={datas} 
                idChange={idChange} 
                login_evt={props.loginId} 
                logout_evt={props.logoutId}
                getAxiosAction={props.getAxiosAction}
                postAxiosAction={props.postAxiosAction}
                data={props.data}
            />}
        </div>
    )
}


//reducer에 있는 state를 가져오는데, reducer의 logger함수에서 반환한다.
const mapStateToProps = (state) => {
    return {
        id: state.logger.id,
        isLogged: state.logger.isLogged,
        list:state.logger.list,
        session:state.logger.session,
        data:state.logger.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateId: (value)=>dispatch(setData(value)),
        loginId: ()=>dispatch(login()),
        logoutId: ()=>dispatch(logout()),
        getAxiosAction: ()=>dispatch(getAxiosAction()),
        postAxiosAction: ()=>dispatch(postAxiosAction()),
        getData: (data)=>dispatch(setData(data)),
    }
}

//LoginPage를 store와 연결한다.
LoginPage = withCookies(connect(mapStateToProps, mapDispatchToProps)(LoginPage))

export default LoginPage

