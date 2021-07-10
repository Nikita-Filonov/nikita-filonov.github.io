import React from "react";
import {useTranslation} from "react-i18next";

export const LastUpdated = ({when}) => {
  const {t} = useTranslation()

  return (
    <p className={'text-right mt-5'} style={{fontSize: 14}}>
      <strong>{t('LastUpdated')} {when}</strong>
    </p>
  )
}

