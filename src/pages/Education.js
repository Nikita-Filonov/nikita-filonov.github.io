import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {LastUpdated} from "../components/blocks/LastUpdated";
import {useTranslation} from "react-i18next";

export const Education = () => {
  const {t} = useTranslation();

  return (
    <div className={'container container-fluid mb-5'}>
      <h3 id={'education'}>{t('Education')}</h3>
      <hr/>
      <p className={'mt-3'}>{t('EducationBlock1')}</p>
      <p className={'mt-3'}>{t('EducationBlock2')}</p>

      <LastUpdated when={'08.07.2021'}/>
      <hr/>
      <div>
        <Button as={Link} to={'/about'} variant="light">
          <ArrowLeft className={'mb-1'}/> {t('Overview')}
        </Button>
        <Button as={Link} to={'/work'} className={'float-right'} variant="light">
          {t('Experience')} <ArrowRight className={'mb-1'}/>
        </Button>
      </div>
    </div>
  )
}

