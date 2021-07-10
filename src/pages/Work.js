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
      {/*<p>В обязанности входит:*/}
      {/*  <li>Покрытие автотестами нескольких проектов компании</li>*/}
      {/*  <li>Разработка и развитие тестового фрэймворка</li>*/}
      {/*  <li>Написание API/UI e2e, интеграционных тестов</li>*/}
      {/*  <li>Настрока GitLab CI для автотестов</li>*/}
      {/*  <li>Написание Dockerfile-ов и запуск автотестов в Docker</li>*/}
      {/*  <li>Интеграция автотестов с проектом на .NET</li>*/}
      {/*  <li>Интеграция автотестов с MS SQL</li>*/}
      {/*  <li>Интеграция с Allure TestOps</li>*/}
      {/*  <li>Интеграция автотестов со Slack</li>*/}
      {/*  <li>Работа с Selenium, Pytest, Pytest-BDD, Python 3.8</li>*/}
      {/*  <li>Генерация видео и скриншотов для UI тестов, с последующим отображеним а Allure отчете</li>*/}
      {/*  <li>Работа с GitLab, YouTack, Miro, Figma, Slack</li>*/}
      {/*</p>*/}
      <p>{t('AlemiraAchievements')}</p>

      <h5 className={'mt-5'}>{t('WakeAppTitle')}</h5>
      <hr/>
      <p id={'wakeapp'}>
        <a href={'https://wakeapp.ru/'} target={'_blank'}>WakeApp</a>, {t('Moscow')}
      </p>
      <p>Middle QA Automation Engineer</p>
      <p>{t('WakeAppProject')}</p>
      {/*<p>В обязанности входило:*/}
      {/*  <li>Разработка тестового фрэймворка</li>*/}
      {/*  <li>Настройка CI в Jenkins</li>*/}
      {/*  <li>Написание API e2e тестов</li>*/}
      {/*  <li>Работа с Selenium, Pytest, Behave, Python 3.7</li>*/}
      {/*  <li>Использование Allure отчетов</li>*/}
      {/*  <li>Интеграция автотестов с MySQL</li>*/}
      {/*  <li>Интеграция автотестов с TestRail</li>*/}
      {/*  <li>Написание технической документации к автотестам</li>*/}
      {/*  <li>Генерация видео и скриншотов для UI тестов, с последующим отображеним а Allure отчете</li>*/}
      {/*  <li>Работа с GitHub, Jira, Confluence, Slack, TestRail</li>*/}
      {/*</p>*/}
      <p>{t('WakeAppAchievements')}</p>

      <h5 className={'mt-5'}>{t('InfotecsTitle')}</h5>
      <hr/>
      <p id={'infotecs'}>
        <a href={'https://infotecs.ru/'} target={'_blank'}>Infotecs</a>, {t('Moscow')}
      </p>
      <p>Middle QA Automation Engineer</p>
      <p>{t('InfotecsProject')}</p>
      {/*<p>В обязанности входило:*/}
      {/*  <li>Разработка тестового фрэймворка</li>*/}
      {/*  <li>Работа c Django/Django Rest Framework</li>*/}
      {/*  <li>Интеграция автотестов с Django</li>*/}
      {/*  <li>Интеграция автотестов с PostgreSQL</li>*/}
      {/*  <li>Написание документации к автотестам</li>*/}
      {/*  <li>Ручная проверка дефектов</li>*/}
      {/*  <li>Написание API/UI e2e тестов</li>*/}
      {/*  <li>Работа с Selenium, Pytest, Python 3.7</li>*/}
      {/*  <li>Работа с GitLab, YouTrack</li>*/}
      {/*</p>*/}
      <p>{t('InfotecsAchievements')}</p>

      <h5 className={'mt-5'}>{t("OmnicommTitle1")}</h5>
      <hr/>
      <p id={'omnicomm'}>
        <a href={'https://www.omnicomm.ru/'} target={'_blank'}>Omnicomm</a>, {t('Moscow')}
      </p>
      <p>Middle QA Automation Engineer</p>
      <p>{t('OmnicommProject1')}</p>
      {/*<p>В обязанности входило:*/}
      {/*  <li>Написание API/UI e2e тестов</li>*/}
      {/*  <li>Работа с Selenium, Pytest, Python 3.7</li>*/}
      {/*  <li>Нагрузочное тестирование с помощью Locust</li>*/}
      {/*  <li>Написание документации к автотестам</li>*/}
      {/*  <li>Подготовка тестового окружения - TeamCity</li>*/}
      {/*  <li>Контроль за исправлением багов</li>*/}
      {/*  <li>Работа с GitHub, Jira, Confluence, TeamCity</li>*/}
      {/*</p>*/}
      <p>{t("OmnicommAchievements1")}</p>

      <h5 className={'mt-5'}>{t('OmnicommTitle2')}</h5>
      <hr/>
      <p><a href={'https://www.omnicomm.ru/'} target={'_blank'}>Omnicomm</a>, {t('Moscow')}</p>
      <p>QA Engineer</p>
      <p>{t('OmnicommProject2')}</p>
      {/*<p>В обязанности входило:*/}
      {/*  <li>Тестирование API/UI</li>*/}
      {/*  <li>Регресс, смоук тестирование</li>*/}
      {/*  <li>Подготовка тестового окружения - TeamCity</li>*/}
      {/*  <li>Работа с Jira, Confluence, TeamCity, TestRail</li>*/}
      {/*  <li>Писал тест-кейсы, чек-листы, тест-планы + поддерживал все в актуальном состоянии</li>*/}
      {/*</p>*/}
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

