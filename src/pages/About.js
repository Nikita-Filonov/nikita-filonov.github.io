import React from "react";

export const About = () => {
  return (
    <div className={'container container-fluid mb-5'}>
      <h4>Общая информация</h4>
      <hr/>
      <p className={'text-secondary mt-3'}>
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
      <h4 className={'mt-5'}>Стэк технологий</h4>
      <hr/>
      <li>Бэкенд:{' '}
        <p className={'text-secondary mt-3'}>
          Python 3.+, Django, Django Rest Framework, Flask, Redis, Celery, Celery-Beat
        </p>
      </li>
      <li>Фронтенд (веб):{' '}
        <p className={'text-secondary mt-3'}>
          JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, Redux-Saga, i18next,
          HTML5, CSS3, Bootstrap, Material-UI, Google Authentication
        </p>
      </li>
      <li>Фронтенд (мобилки):{' '}
        <p className={'text-secondary mt-3'}>
          JavaScript, TypeScript, ES6, ES7, JSX, React-Native, React-Redux, Redux, i18n,
          React Native Elements, React Native Paper, Native Base, Google Places Autocomplete,
          Google Authentication, Google Maps, Firebase, Firebase Cloud Messaging, Firebase Storage
        </p>
      </li>
      <li>Фронтенд (десктоп):{' '}
        <p className={'text-secondary mt-3'}>
          JavaScript, ES6, ES7, JSX, React, React-Redux, Redux, i18n, Electron 13.+
        </p>
      </li>
      <li>Автоматизация тестирования:{' '}
        <p className={'text-secondary mt-3'}>
          Python 3.+, Pytest, Selenium, Webium, Behave, Pytest-BDD, Slack-Client, Allure
        </p>
      </li>
      <li>Инструменты CI/CD:{' '}
        <p className={'text-secondary mt-3'}>
          GitLab CI, Jenkins, Circle CI
        </p>
      </li>
      <li>Базы данных SQL:{' '}
        <p className={'text-secondary mt-3'}>
          MySQL, PostgreSQL, MS SQL, Sqlite 3
        </p>
      </li>
      <li>Базы данных NOSQL:{' '}
        <p className={'text-secondary mt-3'}>
          Realm MongoDB, Atlas Mongo DB
        </p>
      </li>
      <li>Инструменты:{' '}
        <p className={'text-secondary mt-3'}>
          Docker, Docker-Compose, PyCharm, Visual Studio, Atom, GitHub, GitLab, Jira, YouTrack,
          TestRail
        </p>
      </li>
      <h4 className={'mt-5'}>Проекты</h4>
      <hr/>
      <li>RQ Timer - приложение для мониторинга боссов в MMORPG.</li>
    </div>
  )
}
