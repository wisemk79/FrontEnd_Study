import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <NavLink to="/articles">공지사항</NavLink>
            <NavLink to="/articles">자유게시판</NavLink>
            <NavLink to="/articles">자료실</NavLink>

        </div>
    )
}
