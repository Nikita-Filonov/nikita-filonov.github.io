import React from "react";
import {Button} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import {ArrowLeft} from "react-bootstrap-icons";
import rq_timer from './../images/rq_timer.png'
import shipshape from './../images/shipshape.png'
import task_manager from './../images/task_manager.png'
import daily_food from './../images/daily_food.png'
import todo from './../images/todo.png'
import {Logo} from "../components/blocks/Logo";
import {LastUpdated} from "../components/blocks/LastUpdated";
import {useTranslation} from "react-i18next";

export const Projects = () => {
  const {t} = useTranslation();

  return (
    <div className={'container container-fluid mb-5'}>
      <h3>{t('Projects')}</h3>
      <hr/>
      <li>
        <Link to={'/projects#rq_timer'}>RQ Timer</Link>
      </li>
      <li>
        <Link to={'/projects#task_manager'}>Task Manager</Link>
      </li>
      <li>
        <Link to={'/projects#shipshape'}>Shipshape</Link>
      </li>
      <li>
        <Link to={'/projects#daily_food'}>Daily Food</Link>
      </li>
      <li>
        <Link to={'/projects#todo'}>To Do</Link>
      </li>

      <div>
        <h5 className={'mt-5'} id={'rq_timer'}>
          RQ Timer <Logo logo={rq_timer}/>
        </h5>
        <hr/>
        <h6 className={'mt-4'}>{t('Links')}</h6>
        <li>
          <a href={'https://rqtimer.herokuapp.com/login'} target={'_blank'}>Web</a>
        </li>
        <li>
          <a href={'https://play.google.com/store/apps/details?id=com.timer_lama_time'} target={'_blank'}>Mobile</a>
        </li>
        <li>
          <a href={'https://bit.ly/3hvJ6Hl'} target={'_blank'}>Desktop (x64)</a>
        </li>
        <li>
          <a href={'https://bit.ly/3xhjkND'} target={'_blank'}>Desktop (ia32)</a>
        </li>

        <h6 className={'mt-4'}>{t('Description')}</h6>
        <p>
          {t('RQTimerBlock1')}
          <br/>
          <br/>
          {t('RQTimerBlock2')}
          <br/>
          <br/>
          {t("RQTimerBlock3")}
        </p>

        <h6 className={'mt-4'}>{t('Functional')}</h6>
        {[...new Array(14).keys()].map((num) =>
          <li>{t(`RQTimerFunc${num + 1}`)}</li>
        )}
      </div>

      <div>
        <h5 className={'mt-5'} id={'task_manager'}>
          Task Manager <Logo logo={task_manager}/>
        </h5>
        <hr/>
        <h6 className={'mt-4'}>{t('Links')}</h6>
        <li>
          <a href={'https://task-manager-3031.herokuapp.com/login'} target={'_blank'}>Web</a>
        </li>
        <li>
          <a href={'https://play.google.com/store/apps/details?id=com.task_manager'} target={'_blank'}>Mobile</a>
        </li>

        <h6 className={'mt-4'}>{t('Description')}</h6>
        <p>{t('TaskManagerBlock1')}</p>

        <h6 className={'mt-4'}>{t('Functional')}</h6>
        {[...new Array(8).keys()].map((num) =>
          <li>{t(`TaskManagerFunc${num + 1}`)}</li>
        )}
      </div>

      <div>
        <h5 className={'mt-5'} id={'shipshape'}>
          Shipshape <Logo logo={shipshape}/>
        </h5>
        <hr/>
        <h6 className={'mt-4'}>{t('Links')}</h6>
        <li>
          <a href={'https://play.google.com/store/apps/details?id=com.ship_shape_lama_time'}
             target={'_blank'}>Mobile</a>
        </li>

        <h6 className={'mt-4'}>{t('Description')}</h6>
        <p>{t('ShipshapeBlock1')}</p>

        <h6 className={'mt-4'}>{t('Functional')}</h6>
        {[...new Array(14).keys()].map((num) =>
          <li>{t(`ShipshapeFunc${num + 1}`)}</li>
        )}
      </div>

      <div>
        <h5 className={'mt-5'} id={'daily_food'}>
          Daily Food <Logo logo={daily_food}/>
        </h5>
        <hr/>
        <h6 className={'mt-4'}>{t('Links')}</h6>
        <li>
          <a href={'https://play.google.com/store/apps/details?id=com.basket_food_lama_time'}
             target={'_blank'}>Mobile</a>
        </li>

        <h6 className={'mt-4'}>{t('Description')}</h6>
        <p>
          {t('DailyFoodBlock1')} <a target={'_blank'}
                                    href={'https://play.google.com/store/apps/details?id=com.basket_food_android'}>
          Basket Food</a>. {t('DailyFoodBlock2')}
        </p>

        <h6 className={'mt-4'}>{t('Functional')}</h6>
        {[...new Array(11).keys()].map((num) =>
          <li>{t(`DailyFoodFunc${num + 1}`)}</li>
        )}
      </div>

      <div>
        <h5 className={'mt-5'} id={'todo'}>
          To Do <img style={{width: 40, height: 30}} className={'ml-2'} src={todo}/>
        </h5>
        <hr/>
        <h6 className={'mt-4'}>{t('Links')}</h6>
        <li>
          <a href={'https://play.google.com/store/apps/details?id=com.todo_lama_time'} target={'_blank'}>Mobile</a>
        </li>

        <h6 className={'mt-4'}>{t('Description')}</h6>
        <p>{t('TodoBlock1')}</p>

        <h6 className={'mt-4'}>{t('Functional')}</h6>
        {[...new Array(10).keys()].map((num) =>
          <li>{t(`TodoFunc${num + 1}`)}</li>
        )}
      </div>

      <LastUpdated when={'08.07.2021'}/>
      <hr/>
      <div>
        <Button as={Link} to={'/work'} variant="light">
          <ArrowLeft className={'mb-1'}/> {t('Experience')}
        </Button>
      </div>
    </div>
  )
}

