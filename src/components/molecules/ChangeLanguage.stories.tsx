import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'app/store';
import I18N from 'app/i18n';
import { storiesOf } from '@storybook/react';
import ChangeLanguage from './ChangeLanguage';

const store = configureStore({
  initialState: { language: 'en', counter: 0 }
});

const stories = storiesOf('molecules.ChangeLanguage', module);

stories
  .addDecorator(story => (
    <Provider store={store}>
      <I18N>
        <Suspense fallback="loading">{story()}</Suspense>
      </I18N>
    </Provider>
  ))
  .add('Basic', () => <ChangeLanguage />, { notes: 'ChangeLanguage' });
