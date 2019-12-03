import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import languageModule from 'modules/languageModule';
import Dropdown from 'components/atoms/Dropdown';
import DropdownItem from 'components/atoms/DropdownItem';

const supportLanguages = [
  { value: 'en', labelKey: 'lang.en' },
  { value: 'ja', labelKey: 'lang.ja' }
];

const ChangeLanguage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const lang = useSelector<any, any>(state => state.language);

  const [t, i18n] = useTranslation();

  const setLang = (newValue: string) => dispatch(languageModule.actions.lang(newValue));

  return (
    <Dropdown
      defaultValue={lang}
      onChange={e => {
        setLang(e.target.value);
        i18n.changeLanguage(e.target.value);
      }}
    >
      {supportLanguages.map((d, i) => (
        <DropdownItem key={i} value={d.value}>
          {t(d.labelKey)}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default ChangeLanguage;
