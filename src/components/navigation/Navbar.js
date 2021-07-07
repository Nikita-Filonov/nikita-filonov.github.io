import React from "react";
import {Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {setRoute} from "../../redux/reducer/meActions";

const NavigationNavbar = ({route, setRoute}) => {
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
          <Nav.Link
            active={route === '/'}
            eventKey={'/'}
            to="/"
            as={Link}
            onSelect={() => setRoute('/')}
          >
            Главная
          </Nav.Link>
          <Nav.Link
            eventKey={'/about'}
            to="/about"
            as={Link}
            active={route === '/about'}
            onSelect={() => setRoute('/about')}
          >
            Обзор
          </Nav.Link>
          <Nav.Link
            eventKey={'/education'}
            to="/education"
            as={Link}
            active={route === '/education'}
            onSelect={() => setRoute('/education')}
          >
            Образование
          </Nav.Link>
          <Nav.Link
            eventKey={'/work'}
            to="/work"
            as={Link}
            active={route === '/work'}
            onSelect={() => setRoute('/work')}
          >
            Опыт работы
          </Nav.Link>
          <Nav.Link
            eventKey={'/projects'}
            to="/projects"
            as={Link}
            active={route === '/projects'}
            onSelect={() => setRoute('/projects')}
          >
            Проекты
          </Nav.Link>
          <NavDropdown title="Язык" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Русский</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


const getState = (state) => ({
  route: state.me.route
})

export default connect(
  getState,
  {
    setRoute
  },
)(NavigationNavbar);
