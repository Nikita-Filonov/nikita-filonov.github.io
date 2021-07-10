import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {LastUpdated} from "../components/blocks/LastUpdated";
import {useTranslation} from "react-i18next";

export const Work = () => {
  const {t} = useTranslation();

  return (
    <div className={'container container-fluid mb-5'}>
      <h3 id={'work_experience'}>{t('Experience')}</h3>
      <p>{t('WorkExperience')}</p>
      <hr/>
      <h5>{t('AlemiraTitle')}</h5>
      <hr/>
      <p id={'alemira'}>
        <a href={'https://alemira.com/'} target={'_blank'}>SIT Alemira</a>, {t('Moscow')}
      </p>
      <p>Senior QA Automation Engineer</p>
      <p>{t('AlemiraProject')}</p>
      <p>{t('Workplace responsibilities')}:
        {[...new Array(12).keys()].map((num) =>
          <li key={num}>{t(`AlemiraResp${num + 1}`)}</li>
        )}
      </p>
      <p>{t('AlemiraAchievements')}</p>

      <h5 className={'mt-5'}>{t('WakeAppTitle')}</h5>
      <hr/>
      <p id={'wakeapp'}>
        <a href={'https://wakeapp.ru/'} target={'_blank'}>WakeApp</a>, {t('Moscow')}
      </p>
      <p>Middle QA Automation Engineer</p>
      <p>{t('WakeAppProject')}</p>
      <p>{t('Workplace responsibilities')}:
        {[...new Array(10).keys()].map((num) =>
          <li key={num}>{t(`WakeAppResp${num + 1}`)}</li>
        )}
      </p>
      <p>{t('WakeAppAchievements')}</p>

      <h5 className={'mt-5'}>{t('InfotecsTitle')}</h5>
      <hr/>
      <p id={'infotecs'}>
        <a href={'https://infotecs.ru/'} target={'_blank'}>Infotecs</a>, {t('Moscow')}
      </p>
      <p>Middle QA Automation Engineer</p>
      <p>{t('InfotecsProject')}</p>
      <p>{t('Workplace responsibilities')}:
        {[...new Array(9).keys()].map((num) =>
          <li key={num}>{t(`InfotecsResp${num + 1}`)}</li>
        )}
      </p>
      <p>{t('InfotecsAchievements')}</p>

      <h5 className={'mt-5'}>{t("OmnicommTitle1")}</h5>
      <hr/>
      <p id={'omnicomm'}>
        <a href={'https://www.omnicomm.ru/'} target={'_blank'}>Omnicomm</a>, {t('Moscow')}
      </p>
      <p>Middle QA Automation Engineer</p>
      <p>{t('OmnicommProject1')}</p>
      <p>{t('Workplace responsibilities')}:
        {[...new Array(7).keys()].map((num) =>
          <li key={num}>{t(`OmnicommResp1_${num + 1}`)}</li>
        )}
      </p>
      <p>{t("OmnicommAchievements1")}</p>

      <h5 className={'mt-5'}>{t('OmnicommTitle2')}</h5>
      <hr/>
      <p><a href={'https://www.omnicomm.ru/'} target={'_blank'}>Omnicomm</a>, {t('Moscow')}</p>
      <p>QA Engineer</p>
      <p>{t('OmnicommProject2')}</p>
      <p>{t('Workplace responsibilities')}:
        {[...new Array(5).keys()].map((num) =>
          <li key={num}>{t(`OmnicommResp2_${num + 1}`)}</li>
        )}
      </p>
      <p>{t('OmnicommAchievements2')}</p>

      <LastUpdated when={'08.07.2021'}/>
      <hr/>
      <div>
        <Button as={Link} to={'/education'} variant="light">
          <ArrowLeft className={'mb-1'}/> {t('Education')}
        </Button>
        <Button as={Link} to={'/projects'} className={'float-right'} variant="light">
          {t('Projects')} <ArrowRight className={'mb-1'}/>
        </Button>
      </div>
    </div>
  )
}

