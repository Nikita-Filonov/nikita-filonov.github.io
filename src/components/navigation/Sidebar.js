import React, {useEffect, useState} from "react";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import {Main} from "../../pages/Main";
import {About} from "../../pages/About";

export const Sidebar = () => {
  const history = useHistory()
  const [activeKey, setActiveKey] = useState(history.location.pathname)

  useEffect(() => {
    const listener = history.listen(((location, action) => {
        setActiveKey(location.pathname)
      })
    )

    return () => {
      listener()
    }
  }, [history])

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={1} activeKey={activeKey}>
      <Row className={'mt-5 ml-2'} style={{width: '99%'}}>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to={'/'}
                onSelect={() => setActiveKey('/')}
                eventKey={'/'}
              >
                Главная
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to={'/about'}
                onSelect={() => setActiveKey('/about')}
                eventKey={'/about'}
              >
                Обзор
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => setActiveKey(3)} eventKey={3}>
                Образование
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => setActiveKey(4)} eventKey={4}>
                Опыт работы
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => setActiveKey(5)} eventKey={5}>
                Проекты
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey={'/'}>
              <Main/>
            </Tab.Pane>
            <Tab.Pane eventKey={'/about'}>
              <About/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}
