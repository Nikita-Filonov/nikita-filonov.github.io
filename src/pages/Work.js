import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";

export const Work = () =>
  <div className={'container container-fluid mb-5'}>
    <h3>Опыт работы</h3>
    <hr/>
    <h5>Декабрь 2020 - настоящее время</h5>
    <hr/>
    <p><a href={'https://alemira.com/'} target={'_blank'}>SIT Alemira</a>, Москва</p>
    <p>Senior QA Automation Engineer</p>
    <p>Проект:</p>
    <p>В обязанности входит:
      <li>Покрытие автотестами нескольких проектов компании</li>
      <li>Разработка и развитие тестового фрэймворка</li>
      <li>Написание API/UI e2e, интеграционных тестов</li>
      <li>Настрока GitLab CI для автотестов</li>
      <li>Написание Dockerfile-ов и запуск автотестов в Docker</li>
      <li>Интеграция автотестов с прокктом на .NET</li>
      <li>Интеграция автотестов с MS SQL</li>
      <li>Интеграция с Allure TestOps</li>
      <li>Интеграция автотестов со Slack</li>
      <li>Работа с Selenium, Pytest, Pytest-BDD, Python 3.8</li>
      <li>Генерация видео и скриншотов для UI тестов, с последующим отображеним а Allure отчете</li>
      <li>Работа с GitLab</li>
    </p>
    <p>Достижения:</p>

    <h5 className={'mt-5'}>Сентябрь 2020 — Декабрь 2020</h5>
    <hr/>
    <p><a href={'https://wakeapp.ru/'} target={'_blank'}>WakeApp</a>, Москва</p>
    <p>Middle QA Automation Engineer</p>
    <p>Проект:</p>
    <p>В обязанности входило:
      <li>Разработка тестового фрэймворка</li>
      <li>Настройка CI в Jenkins</li>
      <li>Написание API e2e тестов</li>
      <li>Работа с Selenium, Pytest, Behave, Python 3.7</li>
      <li>Использование Allure отчетов</li>
      <li>Написание технической документации к автотестам</li>
      <li>Генерация видео и скриншотов для UI тестов, с последующим отображеним а Allure отчете</li>
      <li>Работа с GitHub</li>
    </p>
    <p>Достижения:</p>

    <h5 className={'mt-5'}>Январь 2020 — Август 2020</h5>
    <hr/>
    <p><a href={'https://infotecs.ru/'} target={'_blank'}>Infotecs</a>, Москва</p>
    <p>Middle QA Automation Engineer</p>
    <p>Проект:</p>
    <p>В обязанности входило:
      <li>Разработка тестового фрэймворка</li>
      <li>Работа c Django/Django Rest Framework</li>
      <li>Интеграция автотестов с Django</li>
      <li>Интеграция автотестов с PostgreSQL</li>
      <li>Написание документации к автотестам</li>
      <li>Ручная проверка дефектов</li>
      <li>Написание API/UI e2e тестов</li>
      <li>Работа с Selenium, Pytest, Python 3.7</li>
      <li>Работа с GitLab</li>
    </p>
    <p>Достижения:</p>

    <h5 className={'mt-5'}>Сентябрь 2019 — Декабрь 2019</h5>
    <hr/>
    <h5 className={'mt-5'}>Февраль 2019 — Август 2019</h5>
    <hr/>

    <hr/>
    <div>
      <Button as={Link} to={'/education'} variant="light">
        <ArrowLeft className={'mb-1'}/> Образование
      </Button>
      <Button as={Link} to={'/projects'} className={'float-right'} variant="light">
        Проекты <ArrowRight className={'mb-1'}/>
      </Button>
    </div>
  </div>
