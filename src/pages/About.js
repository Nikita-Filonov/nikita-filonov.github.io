import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from 'react-router-hash-link';
import {ArrowLeft, ArrowRight, Github, Mailbox, Telegram} from "react-bootstrap-icons";
import {LastUpdated} from "../components/blocks/LastUpdated";
import {useTranslation} from "react-i18next";

export const About = () => {
  const {t} = useTranslation();

  return (
    <div className={'container container-fluid mb-5'}>
      <h3 id={'main_info'}>{t('MainInfo')}</h3>
      <hr/>
      <p className={'mt-3'}>
        {t('MainInfoBlock1')}
        <br/>
        <br/>
        {t('MainInfoBlock2')}
        <br/>
        <br/>
        {t('SocialApi')}
        <li>Telegram</li>
        <li>Vkontakte</li>
        <li>Slack</li>
        <li>Facebook</li>
        <li>Discord</li>
        {t('GoogleApi')}
        <li>Google Calendar</li>
        <li>Google Places Autocomplete</li>
        <li>Google Maps</li>
        <li>Google Authentication</li>
        {t('FirebaseApi')}
        <li>Cloud Messaging ({t('PushNotifications')})</li>
        <li>Storage</li>
        <li>{t('BackendPushNotifications')}</li>
        <br/>
        {t('MainInfoBlock3')}
        <br/>
        <br/>
        {t('MainInfoBlock4')}
      </p>
      <h3 className={'mt-5'} id={'technology_stack'}>{t('TechnologyStack')}</h3>
      <hr/>
      <li><strong>Backend:</strong>{' '}
        <p className={'mt-3'}>
          Python 3.+, Django, Django Rest Framework, Flask, Redis, Celery, Celery-Beat
        </p>
      </li>
      <li><strong>Frontend (web):</strong>{' '}
        <p className={'mt-3'}>
          JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, Redux-Saga, i18next,
          HTML5, CSS3, Bootstrap, Material-UI, Google Authentication
        </p>
      </li>
      <li><strong>Frontend (mobile):</strong>{' '}
        <p className={'mt-3'}>
          JavaScript, TypeScript, ES6, ES7, JSX, React-Native, React-Redux, Redux, i18n,
          React Native Elements, React Native Paper, Native Base, Google Places Autocomplete,
          Google Authentication, Google Maps, Firebase, Firebase Cloud Messaging, Firebase Storage
        </p>
      </li>
      <li><strong>Frontend (desktop):</strong>{' '}
        <p className={'mt-3'}>
          JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, i18n, Electron 13.+
        </p>
      </li>
      <li><strong>{t('AutomationTesting')}</strong>{' '}
        <p className={'mt-3'}>
          Python 3.+, Pytest, Selenium, Webium, Behave, Pytest-BDD, Slack-Client, Allure
        </p>
      </li>
      <li><strong>{t('CI/CD Instruments')}</strong>{' '}
        <p className={'mt-3'}>
          GitLab CI, Jenkins, Circle CI
        </p>
      </li>
      <li><strong>{t('SQL databases')}</strong>{' '}
        <p className={'mt-3'}>
          MySQL, PostgreSQL, MS SQL, Sqlite 3
        </p>
      </li>
      <li><strong>{t('NOSQL databases')}</strong>{' '}
        <p className={'mt-3'}>
          Realm MongoDB, Atlas Mongo DB
        </p>
      </li>
      <li><strong>{t('Instruments')}</strong>{' '}
        <p className={'mt-3'}>
          Docker, Docker-Compose, PyCharm, Visual Studio, Atom, GitHub, GitLab, Jira, YouTrack,
          TestRail
        </p>
      </li>
      <h3 className={'mt-5'} id={'projects'}>{t('Projects')}</h3>
      <hr/>
      <li><Link to={'/projects#rq_timer'}>RQ Timer</Link> — {t('MainRQTimerDescription')}
      </li>
      <li><Link to={'/projects#task_manager'}>Task Manager</Link> — {t('MainTaskManagerDescription')}
      </li>
      <li><Link to={'/projects#shipshape'}>Shipshape</Link> — {t('MainShipshapeDescription')}
      </li>
      <li><Link to={'/projects#daily_food'}>Daily Food</Link> — {t('MainDailyFoodDescription')}
      </li>
      <li><Link to={'/projects#todo'}>To Do</Link> — {t('MainTodoDescription')}
      </li>
      <br/>
      <p>{t('All applications can be viewed/downloaded in')}{' '}
        <a href={'https://play.google.com/store/apps/developer?id=Lama+Time'} target={'_blank'}>{t('my profile')}</a>
        {' '}Play Market.</p>
      <h3 className={'mt-5'} id={'languages'}>{t('MainLanguages')}</h3>
      <hr/>
      <p>{t('Russian — native')}</p>
      <p>{t('English - speak and understand fluently')}</p>
      <h3 className={'mt-5'} id={'contacts'}>{t('Contacts')}</h3>
      <hr/>
      <p>
        <Mailbox className={'mb-1'}/>{' '}
        Mail — <a href={'https://mail.google.com/mail/?view=cm&fs=1&to=filonov.nikitkaa@gmail.com'} target={'_blank'}>
        filonov.nikitkaa@gmail.com</a>
      </p>
      <p>
        <Telegram className={'mb-1'}/>{' '}
        Telegram — <a href={'https://t.me/sound_right'} target={'_blank'}>@sound_right</a>
      </p>
      <p>
        <Github className={'mb-1'}/>{' '}
        GitHub — <a href={'https://github.com/Nikita-Filonov'} target={'_blank'}>Nikita-Filonov</a>
      </p>

      <LastUpdated when={'08.07.2021'}/>
      <hr/>
      <div>
        <Button as={Link} to={'/'} variant="light">
          <ArrowLeft className={'mb-1'}/> {t('Home')}
        </Button>
        <Button as={Link} to={'/education'} className={'float-right'} variant="light">
          {t('Education')} <ArrowRight className={'mb-1'}/>
        </Button>
      </div>
    </div>
  )
}

