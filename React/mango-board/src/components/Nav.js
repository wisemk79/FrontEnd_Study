import React, {useState, useEffect} from 'react'
import {NavLink, Link, Route,Redirect} from 'react-router-dom'
import {Navbar, Form} from 'react-bootstrap'
import './Nav.css'

export default function Nav() {
    const [selected, setSelected] = useState(10)
    const [redirect, setRedirect] = useState(false)
    const [logged, setLogged] = useState(true)
    console.log(logged)

    return (
        <>
        <Navbar className="navDesign" bg="dark" variant="dark">
        <Navbar.Brand href="/">
        <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        MangoBoard
        </Navbar.Brand>
        <Form>
            <Form.Control className="comboBox" as="select" value={selected} onChange={(e)=>{setSelected(e.target.value) 
                                                                                            setRedirect(true)}}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </Form.Control>
        </Form>
        {
        logged? 
        <div>
            <span className="nav-font">mango님 안녕하세요</span>
            <Link className="nav-font" to="/" onClick={()=>{
                setLogged(false)
            }}>LogOut</Link>
            <Link className="nav-font" to="/userupdate">회원정보 수정</Link>
        </div>
        :
        <div>
            <Link className="nav-font" to="/login">Login</Link>
            <Link className="nav-font" to="/join">Join</Link>
        </div>
 
        }
    </Navbar>
    {redirect && <Redirect to={`/articles?size=${selected}`}/>}    
    </>
    )
}
