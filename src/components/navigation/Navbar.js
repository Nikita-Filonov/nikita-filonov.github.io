import React from "react";
import {Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from 'react-router-dom';

export const NavigationNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Никита Филонов</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"/>
        <Nav>
          <Form inline>
            <FormControl type="text" placeholder="Поиск" className="mr-sm-2"/>
          </Form>
          <Nav.Link eventKey={1} to="/" as={Link}>Главная</Nav.Link>
          <Nav.Link eventKey={2} to="/about" as={Link}>Обзор</Nav.Link>
          <Nav.Link eventKey={3} to="/education" as={Link}>Образование</Nav.Link>
          <Nav.Link eventKey={4} to="/work">Опыт работы</Nav.Link>
          <Nav.Link eventKey={5} href="/projects">Проекты</Nav.Link>
          <NavDropdown title="Язык" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Русский</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
