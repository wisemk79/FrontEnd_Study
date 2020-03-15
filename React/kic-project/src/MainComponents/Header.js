import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Containers/images/Main/logo.png'
import {Container, Row, Col, NavDropdown, Navbar, Nav} from 'react-bootstrap'
import './Header.css'

export default function Header() {
    return (
        <Container className="header">
            <Row>
                <Col>
                        <Navbar expand="lg">
                        <Link className="header-position" to="/">
                            <img className="header-position" src={logo} width="89px" alt="Logo" />
                        </Link>
                                <Nav className="mr-auto">
                                <Nav.Link className="edge-menu" href="/login">로그인</Nav.Link>
                                <Nav.Link className="edge-menu" href="/join">회원가입</Nav.Link>
                                <NavDropdown className="edge-menu" title="고객센터">
                                    <NavDropdown.Item className="edge-drop-item" href="#action/3.1">공지사항</NavDropdown.Item>
                                    <NavDropdown.Item className="edge-drop-item" href="#action/3.2">자주하는 질문</NavDropdown.Item>
                                    <NavDropdown.Item className="edge-drop-item" href="#action/3.3">1:1문의</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                        </Navbar>
                </Col>
            </Row>
        </Container>

    )
}
