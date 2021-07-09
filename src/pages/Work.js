import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {LastUpdated} from "../components/blocks/LastUpdated";

export const Work = () =>
  <div className={'container container-fluid mb-5'}>
    <h3 id={'work_experience'}>Опыт работы</h3>
    <p>2 года 6 месяцев</p>
    <hr/>
    <h5>Декабрь 2020 - настоящее время</h5>
    <hr/>
    <p id={'alemira'}>
      <a href={'https://alemira.com/'} target={'_blank'}>SIT Alemira</a>, Москва
    </p>
    <p>Senior QA Automation Engineer</p>
    <p>Проект: Образовательный комплекс для создания виртуальных лабораторных работ.
      Образовательная платформа для курсов.</p>
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
      <li>Работа с GitLab, YouTack, Miro, Figma, Slack</li>
    </p>
    <p>
      Достижения: С нуля поднял тестирование на двух проектах. Сделал множество
      интеграций для автотестов. С нуля за два месяца полностью автоматизировал все
      регрессионной тестирование. Выстроил инфраструктуру в GitLab CI с использованием
      Docker Registry.
    </p>

    <h5 className={'mt-5'}>Сентябрь 2020 — Декабрь 2020</h5>
    <hr/>
    <p id={'wakeapp'}>
      <a href={'https://wakeapp.ru/'} target={'_blank'}>WakeApp</a>, Москва
    </p>
    <p>Middle QA Automation Engineer</p>
    <p>Проект: Маркетинговая CRM система для обработки KPI, кликов, конверсий, продаж.</p>
    <p>В обязанности входило:
      <li>Разработка тестового фрэймворка</li>
      <li>Настройка CI в Jenkins</li>
      <li>Написание API e2e тестов</li>
      <li>Работа с Selenium, Pytest, Behave, Python 3.7</li>
      <li>Использование Allure отчетов</li>
      <li>Интеграция автотестов с MySQL</li>
      <li>Интеграция автотестов с TestRail</li>
      <li>Написание технической документации к автотестам</li>
      <li>Генерация видео и скриншотов для UI тестов, с последующим отображеним а Allure отчете</li>
      <li>Работа с GitHub, Jira, Confluence, Slack, TestRail</li>
    </p>
    <p>
      Достижения: С нуля написал автотесты для API. Поднял инфраструктуру автотестов
      в Jenkins + проинтегрировал Jenkins со Slack. Сделал интеграцию с MySQL, что
      позволило тестам работать на любом окружении - тесты сами создавали себе
      необходимые данные. Большим достижением является то, что написанные мною автотесты
      до сих пор (08.07.2021) работают в Jenkins CI и успешно функционаруют, при этом
      никаких правок в автотесты и сам фрэймворк не вносилось.
    </p>

    <h5 className={'mt-5'}>Январь 2020 — Август 2020</h5>
    <hr/>
    <p id={'infotecs'}>
      <a href={'https://infotecs.ru/'} target={'_blank'}>Infotecs</a>, Москва
    </p>
    <p>Middle QA Automation Engineer</p>
    <p>Проект: Автоматизированный комплекс для поисковой, журналистской, расследовательской деятельности.</p>
    <p>В обязанности входило:
      <li>Разработка тестового фрэймворка</li>
      <li>Работа c Django/Django Rest Framework</li>
      <li>Интеграция автотестов с Django</li>
      <li>Интеграция автотестов с PostgreSQL</li>
      <li>Написание документации к автотестам</li>
      <li>Ручная проверка дефектов</li>
      <li>Написание API/UI e2e тестов</li>
      <li>Работа с Selenium, Pytest, Python 3.7</li>
      <li>Работа с GitLab, YouTrack</li>
    </p>
    <p>
      Достижения: С нуля поднял API/UI тестирование. Внес значительные
      изменения в флоу работы команды: описание задач, составление баг
      репортов, тестирование исправленных багов. Когда я пришел в
      компанию, продукт находился на стадии разработки и даже не была
      выпущена версия. К выходу первой версии, продукт был полностью
      покрыт автотестами, было найдено и проконтролированно множество багов.
    </p>

    <h5 className={'mt-5'}>Сентябрь 2019 — Декабрь 2019</h5>
    <hr/>
    <p id={'omnicomm'}>
      <a href={'https://www.omnicomm.ru/'} target={'_blank'}>Omnicomm</a>, Москва
    </p>
    <p>Middle QA Automation Engineer</p>
    <p>Проект: Образовательная платформа для создания лабораторных работ, тестовых заданий</p>
    <p>В обязанности входило:
      <li>Написание API/UI e2e тестов</li>
      <li>Работа с Selenium, Pytest, Python 3.7</li>
      <li>Нагрузочное тестирование с помощью Locust</li>
      <li>Написание документации к автотестам</li>
      <li>Подготовка тестового окружения - TeamCity</li>
      <li>Контроль за исправлением багов</li>
      <li>Работа с GitHub, Jira, Confluence, TeamCity</li>
    </p>
    <p>
      Достижения: По собсвенному желанию начал автоматизацию на проекте.
      С нуля были автоматизированны все регрессионные тесты.
    </p>

    <h5 className={'mt-5'}>Февраль 2019 — Август 2019</h5>
    <hr/>
    <p><a href={'https://www.omnicomm.ru/'} target={'_blank'}>Omnicomm</a>, Москва</p>
    <p>QA Engineer</p>
    <p>Проект: Комплекс по контролю топлива в грузовом транспорте</p>
    <p>В обязанности входило:
      <li>Тестирование API/UI</li>
      <li>Регресс, смоук тестирование</li>
      <li>Подготовка тестового окружения - TeamCity</li>
      <li>Работа с Jira, Confluence, TeamCity, TestRail</li>
      <li>Писал тест-кейсы, чек-листы, тест-планы + поддерживал все в актуальном состоянии</li>
    </p>
    <p>
      Достижения: Первый из команды предложил внедрение автоматизированного тестирования,
      в последующем был перевед на другой проект для развития автоматизации.
    </p>

    <LastUpdated when={'Обновлено 08.07.2021'}/>
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
