import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Containers/images/Main/logo.png'
import {Dropdown} from 'react-bootstrap'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
<Dropdown.Menu show>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</Dropdown.Menu>
            <Link to="/">
                <img src={logo} width="89px" alt="Logo" />
            </Link>
        </div>

    )
}
