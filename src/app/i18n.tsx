import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { getLanguage } from 'app/selectors';

i18next
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },

    // react-i18next special options (optional)
    react: {
      wait: true // true: wait for loaded in every translated hoc
    }
  });

i18next.languages = ['en', 'ja'];

interface Props {
  children: React.ReactNode;
}

const I18N: React.FunctionComponent<Props> = ({ children }) => {
  const language = useSelector(getLanguage);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export default React.memo(I18N);
