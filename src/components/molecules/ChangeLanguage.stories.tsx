import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { SupportLanguage } from 'app/types';
import configureStore from 'app/store';
import I18N from 'app/i18n';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import ChangeLanguage from './ChangeLanguage';

const store = configureStore({
  initialState: { language: 'en', counter: 0 }
});

const stories = storiesOf('molecules.ChangeLanguage', module);

const supportLanguages: SupportLanguage[] = [
  { value: 'en', labelKey: 'lang.en' },
  { value: 'fr', labelKey: 'lang.fr' },
  { value: 'de', labelKey: 'lang.de' },
  { value: 'it', labelKey: 'lang.it' },
  { value: 'ja', labelKey: 'lang.ja' },
  { value: 'gd', labelKey: 'lang.gd' },
  { value: 'sv', labelKey: 'lang.sv' }
];

stories
  .addDecorator(story => (
    <Provider store={store}>
      <I18N>
        <Suspense fallback="loading">{story()}</Suspense>
      </I18N>
    </Provider>
  ))
  .add('Basic', () => <ChangeLanguage supportLanguages={object('supportLanguages', supportLanguages)} />, {
    notes: 'ChangeLanguage'
  });
