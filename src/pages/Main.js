import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setRoute} from "../redux/reducer/meActions";
import {useTranslation} from 'react-i18next';
import {ArrowRight} from "react-bootstrap-icons";

const Main = ({setRoute}) => {
  const history = useHistory();
  const {t} = useTranslation();

  return (
    <div className={'container mt-5'}>
      <h4 className={'text-center'}>{t('Welcome')}</h4>
      <h4 className={'text-center text-secondary'}>{t('WelcomeSubtitle')}</h4>
      <div className={'text-center'}>
        <Button
          variant="outline-secondary"
          className={'mt-5'}
          onClick={() => {
            setRoute('/about')
            history.push('/about')
          }}
        >
          {t('Get started')} <ArrowRight className={'mb-1'}/>
        </Button>
      </div>
      <Row style={{marginTop: '10%'}}>
        <hr style={{width: '100%'}}/>
        <Col>
          <h5>{t('HighProductivity')}</h5>
          <p className={'text-secondary mt-3'}>{t('HighProductivityDescription')}</p>
        </Col>
        <Col>
          <h5>{t('ModernStack')}</h5>
          <p className={'text-secondary mt-3'}>{t('ModernStackDescription')}</p>
        </Col>
        <Col>
          <h5>{t('VersatileExperience')}</h5>
          <p className={'text-secondary mt-3'}>{t('VersatileExperienceDescription')}</p>
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
