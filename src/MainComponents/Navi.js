import React from 'react'
import {FormControl} from 'react-bootstrap'
import './Navi.css'

export default function Navi() {
    return (
        <>
            <div className="nav-container">
            <ul className="nav-menu">
                    <li><a className="nav-category" href="#">전체 카테고리</a>
                        <ul>
                            <li><a href="#" className="documents">채소</a></li>
                            <li><a href="#" className="messages">과일 견과 쌀</a></li>
                            <li><a href="#" className="signout">수산 해산 건어물</a></li>
                            <li><a href="#" className="signout">정육 계란</a></li>
                            <li><a href="#" className="signout">국 반찬 메인요리</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-items" href="#">신상품</a></li>
                    <li><a className="nav-items" href="#">베스트</a></li>
                    <li><a className="nav-items" href="#">알뜰쇼핑</a></li>
                    <li><a className="nav-items" href="#">이벤트</a></li>
                    <li className="nav-search-container"><FormControl id="nav-search" type="text" placeholder="Search" className="mr-sm-2"/></li>
                </ul>
            </div>
        </>
    )
}
