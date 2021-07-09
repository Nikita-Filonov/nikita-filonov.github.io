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

export const Projects = () =>
  <div className={'container container-fluid mb-5'}>
    <h3>Проекты</h3>
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
      <h6 className={'mt-4'}>Ссылки</h6>
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

      <h6 className={'mt-4'}>Описание</h6>
      <p>
        Проект предназначен для мониторинга боссов/элитных монстров в реальном
        времени, само приложение было написанно для MMORPG игры Royal Quest. Но
        на самом деле, может быть использованно для любой многопользовательской игры.
        Это один из самых маштабных проектов, которы мне приходилось реализовывать
        и поддерживать. На данный момент приложением пользуются почти 500 пользователей.
        Ежедневно сервис посещают около 100 юзеров.
        <br/>
        <br/>
        Серверная и Web часть были написаны за одну неделю. Далее вышло мобильное приложение,
        после вышло Desktop приложение. На данный момент было выпущено 7 релизов.
        <br/>
        <br/>
        Desktop приложение имеет overlay для игры, системные уведомления.
      </p>

      <h6 className={'mt-4'}>Функционал</h6>
      <li>Создание/удаление/обновление личных и групповых таймеров</li>
      <li>Пользователи могут создавать группы для коллективного использования</li>
      <li>В группах есть система прав доступа</li>
      <li>В группах для таймеров сохраняется история изменений</li>
      <li>Есть возможность восстановления из истории</li>
      <li>Уведомления в Telegram</li>
      <li>Уведомления через Вконтакте</li>
      <li>Уведомления в Discord</li>
      <li>Уведомления в мобильном приложении</li>
      <li>Звуковые уведомления в таймере</li>
      <li>Системные уведомления в Desktop клиенте</li>
      <li>Настройки уведомлений, комментариев, звука</li>
      <li>Google Авторизация</li>
      <li>Приглашение участников через почту</li>
    </div>

    <div>
      <h5 className={'mt-5'} id={'task_manager'}>
        Task Manager <Logo logo={task_manager}/>
      </h5>
      <hr/>
      <h6 className={'mt-4'}>Ссылки</h6>
      <li>
        <a href={'https://task-manager-3031.herokuapp.com/login'} target={'_blank'}>Web</a>
      </li>
      <li>
        <a href={'https://play.google.com/store/apps/details?id=com.task_manager'} target={'_blank'}>Mobile</a>
      </li>

      <h6 className={'mt-4'}>Описание</h6>
      <p>
        Это первый мой проект и первое мобильное приложение. Приложение предназначено для создания заметок/задач.
        В приложении есть возможность шаринга задач между пользователями. На текущий момент им пользуется
        почти 200 человек.
      </p>

      <h6 className={'mt-4'}>Функционал</h6>
      <li>Создание/удаление/обновление задач</li>
      <li>Уведомления в Telegram</li>
      <li>Увдомления в мобильном приложении</li>
      <li>Уведомления в Web версии</li>
      <li>Уведомления на почту</li>
      <li>Шаринг задач между пользователями</li>
      <li>Комментарии к пошаренным задачам</li>
      <li>Множество настроек, в том числе кастомные лэйблы к задачам</li>
    </div>

    <div>
      <h5 className={'mt-5'} id={'shipshape'}>
        Shipshape <Logo logo={shipshape}/>
      </h5>
      <hr/>
      <h6 className={'mt-4'}>Ссылки</h6>
      <li>
        <a href={'https://play.google.com/store/apps/details?id=com.ship_shape_lama_time'} target={'_blank'}>Mobile</a>
      </li>

      <h6 className={'mt-4'}>Описание</h6>
      <p>
        Социальная сеть для обмена советами по уходу за собой. Приложение имеет
        довольно обширный функционал и встроенную базу со статьями по уходу.
        Есть разделение статей по категориям: "Лицо", "Волосы", "Тело", "Здоровье".
        Также приложение индивидуально подбирает советы под выбранный тип волос,
        кожи, возраст. Пользователи могу создавать посты и общаться в чате,
        подписываться на других пользователей.
      </p>

      <h6 className={'mt-4'}>Функционал</h6>
      <li>Создание постов</li>
      <li>Просмотр встроенных статей и фильтрация по ним</li>
      <li>Общение в чате, внутри приложения</li>
      <li>Подписки, подписчики</li>
      <li>Профиль пользователя</li>
      <li>Push-уведомления о новый статьях, подписках, о сообщениях в чате</li>
      <li>Настройки уведомлений</li>
      <li>Deep linking - возможность поделиться профилем, статьей, постом</li>
      <li>Лайки, комментарии к постам</li>
      <li>
        Индивидуальная настройка физиологических данных, на основе которых подбираются
        статьи.
      </li>
      <li>
        Индивидулаьный профиль пользователя с настройкой данных о себе и фото профиля
      </li>
      <li>Просмотр уведомлений</li>
      <li>Просмотр лайкнутых статей</li>
      <li>Система тикетов и обращения в тех поддержку</li>
    </div>

    <div>
      <h5 className={'mt-5'} id={'daily_food'}>
        Daily Food <Logo logo={daily_food}/>
      </h5>
      <hr/>
      <h6 className={'mt-4'}>Ссылки</h6>
      <li>
        <a href={'https://play.google.com/store/apps/details?id=com.basket_food_lama_time'} target={'_blank'}>Mobile</a>
      </li>

      <h6 className={'mt-4'}>Описание</h6>
      <p>
        Приложение для списка покупок и рецептов. В приложении можно создавать рецепты и на
        основе них собирать корзину покупок. Daily Food это новая версия
        приложения <a target={'_blank'} href={'https://play.google.com/store/apps/details?id=com.basket_food_android'}>
        Basket Food</a>. В новой версии был полностью переработан дизайн и функционал, увеличелось количество
        продуктов с 300, до 3000. Была проведена большая работа над производительностью приложения. Добавлена
        анимация.
      </p>

      <h6 className={'mt-4'}>Функционал</h6>
      <li>Создание/удаление/изменение/копирование списков с продуктами</li>
      <li>Добавление своих продуктов</li>
      <li>Добавление своих категорий продуктов, с фото</li>
      <li>Добавление фото к продуктам</li>
      <li>Сторис в приложении</li>
      <li>Массовое выделение для всех списков</li>
      <li>Понравившиеся продукты/рецепты/списки</li>
      <li>Анимация для сортировки и всех списков</li>
      <li>Есть возможность поделиться списком с другим юзером</li>
      <li>Создание рецептов с фото, описанием, временем приготовления</li>
      <li>Сиситема достижений для мотивации пользователей посещать приложение</li>
    </div>

    <div>
      <h5 className={'mt-5'} id={'todo'}>
        To Do <img style={{width: 40, height: 30}} className={'ml-2'} src={todo}/>
      </h5>
      <hr/>
      <h6 className={'mt-4'}>Ссылки</h6>
      <li>
        <a href={'https://play.google.com/store/apps/details?id=com.todo_lama_time'} target={'_blank'}>Mobile</a>
      </li>

      <h6 className={'mt-4'}>Описание</h6>
      <p>
        Приложения для напоминаний и заметок. Имеет очень удобный интерфейс,
        для создания пометок. Имеет систему для напоминаний с повторами в виде
        Push-уведомлений. От Task Manager отличается тем, что полностью
        использует локальную базу данных. В приложении также есть планировщик
        дня.
      </p>

      <h6 className={'mt-4'}>Функционал</h6>
      <li>Создание/удаление/изменение заметок</li>
      <li>Создание/удаление/изменение списков в заметками</li>
      <li>Изменение фона списка</li>
      <li>Планировщик дня</li>
      <li>Глобальный поиск по всем заметкам</li>
      <li>Индивидуальные настройки разделов с задачами</li>
      <li>Добавление под шагов для заметок</li>
      <li>
        Для каждой заметки есть возможность настроить время напоминания и
        переодичность повторения
      </li>
      <li>Есть возможность настроить время выполнения</li>
      <li>Приложение имеет очень удобный и компактный интерфейс</li>
    </div>

    <LastUpdated when={'Обновлено 08.07.2021'}/>
    <hr/>
    <div>
      <Button as={Link} to={'/work'} variant="light">
        <ArrowLeft className={'mb-1'}/> Опыт работы
      </Button>
    </div>
  </div>
