import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setRoute} from "../redux/reducer/meActions";
import {useTranslation} from 'react-i18next';

const Main = ({setRoute}) => {
  const history = useHistory();
  const {t} = useTranslation()

  return (
    <div className={'container mt-5'}>
      <h4 className={'text-center'}>Добро пожаловать! Вы находитесь на личном сайте Никиты Филонова.</h4>
      <h4 className={'text-center text-secondary'}>Я увлекаюсь веб и мобильной разработкой</h4>
      <div className={'text-center'}>
        <Button
          variant="secondary"
          className={'mt-5'}
          onClick={() => {
            setRoute('/about')
            history.push('/about')
          }}
        >
          {t('Get started')}
        </Button>
      </div>
      <Row style={{marginTop: '10%'}}>
        <hr style={{width: '100%'}}/>
        <Col>
          <h5>Высокая продуктивность</h5>
          <p className={'text-secondary mt-3'}>
            Я всегда нацелен на результат. Если проект мне
            интересен, то я способен сделать проект за неделю,
            в то время, когда другим разработчикам требуются месяцы
            на реализацию.
          </p>
        </Col>
        <Col>
          <h5>Современный стэк</h5>
          <p className={'text-secondary mt-3'}>
            Я использую только современные технологии, которые
            обеспечивают высокую продизводительность. А также
            позволяют легко маштабировать проект.
          </p>
        </Col>
        <Col>
          <h5>Разносторонний опыт</h5>
          <p className={'text-secondary mt-3'}>
            В моей практике был опыт, как бэкенд разработки, так и
            фронтенд (веб/мобилка). Есть огромный опыт написания
            автотестов, поэтому мой код всегда покрывается
            API и Unit тестами. Для меня не проблема настроить
            инфраструктуру проекта в CI/CD.
          </p>
        </Col>
      </Row>
    </div>
  )
}


export default connect(null,
  {
    setRoute
  },
)(Main);
