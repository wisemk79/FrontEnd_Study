import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
    return (
        <>
            <ul className="nav-design">
            <Link to="/"><li>홈</li></Link>
            <Link to="/login"><li>로그인</li></Link>
            <li>로그인한사람: {props.logger_name}<br/>
                로그인여부: {props.isLogged}<br/>
                세션: {props.session}
            </li>
            </ul>
        </>
    )
}
