import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from 'react-router-hash-link';
import {ArrowLeft, ArrowRight, Github, Mailbox, Telegram} from "react-bootstrap-icons";

export const About = () =>
  <div className={'container container-fluid mb-5'}>
    <h3>Общая информация</h3>
    <hr/>
    <p className={'mt-3'}>
      Имею значительный опыт в написании автоматизированных тестов. А также
      в настройке CI для автотестов. Имеется большой опыт работы с
      фронтендом. Понимаю логику построения фронтенда. Есть опыт работы
      с https, wss с фронта. Отлично знаю, как работает локализация.
      Спокойно могу работать с <strong>HTML/CSS</strong>
      <br/>
      <br/>
      Имею большой опыт работы с бэкенд частью. Отлично понимаю, все принципы построения
      RESTful приложений. Умею работать как с реляционными так и с нереляционными базами
      данных. Хорошо разбираюсь в видах авторизаций <strong>Basic/API KEY/Bearer/OAuth2/Session</strong>{' '}
      и имею опыт внедрения в проекты.
      <br/>
      <br/>
      Есть опыт взаимодействия с API популярных соц сетей и месенджеров, таких как: <br/>
      <li>Telegram</li>
      <li>Вконтакте</li>
      <li>Slack</li>
      <li>Facebook</li>
      <li>Discord</li>
      Также есть опыт работы и интеграции в проекты таких google сервисов, как:<br/>
      <li>Google Calendar</li>
      <li>Google Places Autocomplete</li>
      <li>Google Maps</li>
      <li>Google Authentication</li>
      Для мобильных приложений есть опыт работы с Firebase, а именно:
      <li>Cloud Messaging (Push-уведмоления)</li>
      <li>Storage</li>
      <li>Отправка Push-уведомлений c бэкенда</li>
      <br/>
      На мобильных устройствах есть опыт реализации чата, с отправкой
      изображений и файлов. Есть опыт реализации с <strong>deep linking</strong> для мобильных
      приложений. Для мобильных приложений спокойно могу работать с <strong>локальными</strong>{' '}
      базами данных, или же с поддержкой сервера. При необходимости могу
      граммотно миксовать два тип сервер + локальная бд. Имею опыт реализации
      <strong>dark/light theme</strong> для мобильных приложений.
      <br/>
      <br/>
      Имеется опыт работы с монолитной и микросервисной архитектурой. Также имеется
      опыт создания <strong>переодически выполняемых</strong> задач на стороне бэкенда.
    </p>
    <h3 className={'mt-5'}>Стэк технологий</h3>
    <hr/>
    <li>Бэкенд:{' '}
      <p className={'mt-3'}>
        Python 3.+, Django, Django Rest Framework, Flask, Redis, Celery, Celery-Beat
      </p>
    </li>
    <li>Фронтенд (веб):{' '}
      <p className={'mt-3'}>
        JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, Redux-Saga, i18next,
        HTML5, CSS3, Bootstrap, Material-UI, Google Authentication
      </p>
    </li>
    <li>Фронтенд (мобилки):{' '}
      <p className={'mt-3'}>
        JavaScript, TypeScript, ES6, ES7, JSX, React-Native, React-Redux, Redux, i18n,
        React Native Elements, React Native Paper, Native Base, Google Places Autocomplete,
        Google Authentication, Google Maps, Firebase, Firebase Cloud Messaging, Firebase Storage
      </p>
    </li>
    <li>Фронтенд (десктоп):{' '}
      <p className={'mt-3'}>
        JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, i18n, Electron 13.+
      </p>
    </li>
    <li>Автоматизация тестирования:{' '}
      <p className={'mt-3'}>
        Python 3.+, Pytest, Selenium, Webium, Behave, Pytest-BDD, Slack-Client, Allure
      </p>
    </li>
    <li>Инструменты CI/CD:{' '}
      <p className={'mt-3'}>
        GitLab CI, Jenkins, Circle CI
      </p>
    </li>
    <li>Базы данных SQL:{' '}
      <p className={'mt-3'}>
        MySQL, PostgreSQL, MS SQL, Sqlite 3
      </p>
    </li>
    <li>Базы данных NOSQL:{' '}
      <p className={'mt-3'}>
        Realm MongoDB, Atlas Mongo DB
      </p>
    </li>
    <li>Инструменты:{' '}
      <p className={'text-secondary mt-3'}>
        Docker, Docker-Compose, PyCharm, Visual Studio, Atom, GitHub, GitLab, Jira, YouTrack,
        TestRail
      </p>
    </li>
    <h3 className={'mt-5'}>Проекты</h3>
    <hr/>
    <li><Link to={'/projects#rq_timer'}>RQ Timer</Link> — приложение для мониторинга боссов в MMORPG. Самый успешный и
      высоко нагруженный проект. Имеет серверную и 3 раных клиентских части: Desktop,
      Mobile, Web.
    </li>
    <li><Link to={'/projects#task_manager'}>Task Manager</Link> — самый первый мой проект. Приложение для
      заметок/задач. Имеет 2 клиентские части: Web, Mobile
    </li>
    <li><Link to={'/projects#shipshape'}>Shipshape</Link> — социальная сеть для обмена советами
      по красоте и уходу за собой. Имеется только мобильная клиентская часть. В приложении есть посты,
      статьи, профиль пользователя, deep linking, чат.
    </li>
    <li><Link to={'/projects#daily_food'}>Daily Food</Link> — приложение для списка покупок и рецептов.
      Имеется только мобильная клиентская часть. В приложении есть сторис, широкий выбор продуктов,
      возможность создавать рецепты с фотографиями, категории, достижения.
    </li>
    <li><Link to={'/projects#todo'}>To Do</Link> — приложения для списка дел. От Task Manager
      отличается тем, что работает без поддержки сервера. И имеет более обширный функционал.
    </li>
    <br/>
    <p>Все приложения можно посмотреть/скачать в{' '}
      <a href={'https://play.google.com/store/apps/developer?id=Lama+Time'} target={'_blank'}>моем профиле</a>
      {' '}Play Market.</p>
    <h3 className={'mt-5'}>Языки</h3>
    <hr/>
    <p>Русский — родной</p>
    <p>English — свободно говорю и понимаю</p>
    <h3 className={'mt-5'}>Контакты</h3>
    <hr/>
    <p>
      <Mailbox className={'mb-1'}/>{' '}
      Почта — <a href={'https://mail.google.com/mail/?view=cm&fs=1&to=filonov.nikitkaa@gmail.com'} target={'_blank'}>
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
    <hr/>
    <div>
      <Button as={Link} to={'/'} variant="light">
        <ArrowLeft className={'mb-1'}/> Главная
      </Button>
      <Button as={Link} to={'/education'} className={'float-right'} variant="light">
        Образование <ArrowRight className={'mb-1'}/>
      </Button>
    </div>
  </div>
