import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'components/atoms/Dropdown';
import DropdownItem from 'components/atoms/DropdownItem';
import { setLanguage } from 'app/actions';
import { getLanguage } from 'app/selectors';
import { Language } from 'app/types';

const supportLanguages = [
  { value: 'en', labelKey: 'lang.en' },
  { value: 'ja', labelKey: 'lang.ja' }
];

const ChangeLanguage: FunctionComponent = () => {
  const [t] = useTranslation();

  const dispatch = useDispatch();
  const language = useSelector(getLanguage);

  const handleLanguageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setLanguage(e.currentTarget.value as Language));
    },
    [dispatch]
  );

  return (
    <Dropdown defaultValue={language} onChange={handleLanguageChange}>
      {supportLanguages.map((d, i) => (
        <DropdownItem key={i} value={d.value}>
          {t(d.labelKey)}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default ChangeLanguage;
