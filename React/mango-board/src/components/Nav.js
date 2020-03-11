import React, {useState, useEffect} from 'react'
import {NavLink, Link, Route} from 'react-router-dom'
import {Navbar, Form} from 'react-bootstrap'
import './Nav.css'

export default function Nav() {
    const [selected, setSelected] = useState(10)
    console.log(selected)

    return (
        <>
        <Navbar className="navDesign" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
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
            <Form.Control className="comboBox" as="select" value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </Form.Control>
        </Form>
    </Navbar>
    </>
    )
}
