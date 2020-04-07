import React,{useState} from 'react'

export default function Login(props) {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            로그인 => {props.logger_name}
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
            <br/>
                <input type="password"/>
                <input type="submit" value="로그인"/>
                <input type="button" value="로그아웃"/>
            </form>
        </div>
    )
}
