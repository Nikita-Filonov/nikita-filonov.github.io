import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {LastUpdated} from "../components/blocks/LastUpdated";

export const Education = () =>
  <div className={'container container-fluid mb-5'}>
    <h3>Образование</h3>
    <hr/>
    <p className={'mt-3'}>
      На данный момент у меня только среднее общее образование. Но это не мешает мне жить
      и разиваваться :)
    </p>
    <p className={'mt-3'}>
      Пробовал ли я получать высшее/среднее специально образование? Да. Какое-то время
      учился в <strong>Смоленский филиал НИУ "МЭИ"</strong> и посещал дополнительную профессиональную
      переподготовку по направлению <strong>"Управление персоналом"</strong>. Совмещал работу QA Automation
      Engineer с учебой, но на 3-м курсе я бросил обучение.
    </p>

    <LastUpdated when={'Обновлено 08.07.2021'}/>
    <hr/>
    <div>
      <Button as={Link} to={'/about'} variant="light">
        <ArrowLeft className={'mb-1'}/> Обзор
      </Button>
      <Button as={Link} to={'/work'} className={'float-right'} variant="light">
        Опыт работы <ArrowRight className={'mb-1'}/>
      </Button>
    </div>
  </div>
