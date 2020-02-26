import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            {/* Link to=""는 어떤 주소로 보내줄지 설정하는것 */}
            <NavLink exact to="/" className="item" activeClassName="active">홈</NavLink>
            <NavLink to="/about/su" className="item" activeClassName="active">소개</NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
            <NavLink to="/my" className="item" activeClassName="active">마이페이지</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>
            <NavLink to="/search" className="item" activeClassName="active">검색</NavLink>
        </div>
    )
}

export default Header
