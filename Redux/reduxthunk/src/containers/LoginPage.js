import React, {useState, useEffect} from 'react'
import Login from '../components/Login'
import {setId, login, logout} from '../action'
import {connect} from 'react-redux'

function LoginPage(props) {
    const [logger_name, setLogger_name] = useState(null)

    useEffect(() => {
        if(!logger_name){
            setLogger_name(props.id)
        }
    })

    const idChange = (event) => { 
        props.onUpdateId(event.target.value); 
    } 

    return (
        <div>
            {logger_name && 
            <Login 
                logger_name={props.id} 
                idChange={idChange} 
                login_evt={props.loginId} 
                logout_evt={props.logoutId}
            />}
        </div>
    )
}


//reducer에 있는 state를 가져오는데, reducer의 logger함수에서 반환한다.
const mapStateToProps = (state) => {
    return {
        id: state.logger.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateId: (value)=>dispatch(setId(value)),
        loginId: ()=>dispatch(login()),
        logoutId: ()=>dispatch(logout())
    }
}

//LoginPage를 store와 연결한다.
LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginPage

