import {useTranslation} from "react-i18next";

export const SearchRefs = () => {
  const {t} = useTranslation();

  const Refs = [
    {title: t('MainInfo'), ref: '/about#main_info'},
    {title: t('TechnologyStack'), ref: '/about#technology_stack'},
    {title: t('Projects'), ref: '/about#projects'},
    {title: t('MainLanguages'), ref: '/about#languages'},
    {title: t('Contacts'), ref: '/about#contacts'},
    {title: t('Education'), ref: '/education#education'},
    {title: 'RQ Timer', ref: '/projects#rq_timer'},
    {title: 'Task Manager', ref: '/projects#task_manager'},
    {title: 'Shipshape', ref: '/projects#shipshape'},
    {title: 'Daily Food', ref: '/projects#daily_food'},
    {title: 'To Do', ref: '/projects#todo'},
    {title: 'Опыт работы', ref: '/work#work_experience'},
    {title: 'SIT Alemira, Москва', ref: '/work#alemira'},
    {title: 'WakeApp, Москва', ref: '/work#wakeapp'},
    {title: 'Infotecs, Москва', ref: '/work#infotecs'},
    {title: 'Omnicomm, Москва', ref: '/work#omnicomm'}
  ]

  return {Refs}
}


