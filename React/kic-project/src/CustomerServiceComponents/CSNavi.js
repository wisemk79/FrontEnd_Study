import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './CSNavi.css'

export default function CSNavi() {
    return (
        <>
        <Container>
            <div className="cs-navi-design">
                <ul>
                    <h3>고객센터</h3>
                    <Link className="customer-navi" to="/customer/notice"><li className="customer-navi-button">공지사항 ></li></Link>
                    <Link className="customer-navi" to="/customer/temp"><li className="customer-navi-button">자주하는 질문 ></li></Link>
                    <Link className="customer-navi" to="/customer/qna"><li className="customer-navi-button">1:1문의 ></li></Link>
                </ul>
            </div>
        </Container>
        </>
    )
}
