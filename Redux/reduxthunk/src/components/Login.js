import React,{useState} from 'react'

export default function Login(props) {
    const handleLogin = () =>{
        props.login_evt()
    }
    const handleLogout = ()=>{
        props.logout_evt()
    }
    
    return (
        <div>
            로그인 => {props.logger_name}
            <br/>
            <form>
                <input type="text" value={props.logger_name} onChange={props.idChange}/>
            <br/>
                <input type="password"/>
                <input type="button" onClick={handleLogin} value="로그인"/>
                <input type="button" onClick={handleLogout} value="로그아웃"/>
            </form>
        </div>
    )
}


