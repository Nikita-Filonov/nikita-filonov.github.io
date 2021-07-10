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
    {title: t('Опыт работы'), ref: '/work#work_experience'},
    {title: `SIT Alemira, ${t('Moscow')}`, ref: '/work#alemira'},
    {title: `WakeApp, ${t('Moscow')}`, ref: '/work#wakeapp'},
    {title: `Infotecs, ${t('Moscow')}`, ref: '/work#infotecs'},
    {title: `Omnicomm, ${t('Moscow')}`, ref: '/work#omnicomm'}
  ]

  return {Refs}
}


