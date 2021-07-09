import React, {useEffect} from "react";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import Main from "../../pages/Main";
import {About} from "../../pages/About";
import {connect} from "react-redux";
import {setRoute} from "../../redux/reducer/meActions";
import {Education} from "../../pages/Education";
import {Work} from "../../pages/Work";
import {Projects} from "../../pages/Projects";

const Sidebar = ({route, setRoute}) => {
  const history = useHistory()

  useEffect(() => {
    setRoute(history.location.pathname)
    const listener = history.listen(((location, action) => {
        setRoute(location.pathname)
      })
    )

    return () => {
      listener()
    }
  }, [history, setRoute])

  return (
    <Tab.Container
      id="left-tabs-example"
      defaultActiveKey={'/'}
      activeKey={route}
      onSelect={(path) => setRoute(path)}
    >
      <Row className={'mt-5 ml-2 mr-2 mb-5'}>
        <Col sm={3}>
          <Nav variant="pills"
               style={{width: '18%'}}
               className="flex-column position-fixed d-none d-sm-block"
               bg="dark"
          >
            <Nav.Item className={'w-100'}>
              <Nav.Link as={Link} to={'/'} eventKey={'/'}>
                Главная
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/about'} eventKey={'/about'}>
                Обзор
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/education'} eventKey={'/education'}>
                Образование
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/work'} eventKey={'/work'}>
                Опыт работы
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/projects'} eventKey={'/projects'}>
                Проекты
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={7}>
          <Tab.Content>
            <Tab.Pane eventKey={'/'}>
              <Main/>
            </Tab.Pane>
            <Tab.Pane eventKey={'/about'}>
              <About/>
            </Tab.Pane>
            <Tab.Pane eventKey={'/education'}>
              <Education/>
            </Tab.Pane>
            <Tab.Pane eventKey={'/work'}>
              <Work/>
            </Tab.Pane>
            <Tab.Pane eventKey={'/projects'}>
              <Projects/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
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
)(Sidebar);
