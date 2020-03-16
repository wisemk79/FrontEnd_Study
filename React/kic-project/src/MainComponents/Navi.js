import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import "./Navi.css";

export default function() {
  return (
    <div>
      <Navbar  className="navContainer" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown className="drop-menudesign" title="전체 카테고리" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navdesign" href="/category">신상품</Nav.Link>
            <Nav.Link className="navdesign" href="/category">베스트</Nav.Link>
            <Nav.Link className="navdesign" href="/category">알뜰쇼핑</Nav.Link>
            <Nav.Link className="navdesign" href="/event">이벤트</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
