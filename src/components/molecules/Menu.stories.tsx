import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'app/store';
import I18N from 'app/i18n';
import { Router } from 'react-router-dom';
import { createHistory } from 'app/history';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { MenuItem } from 'app/types';
import Menu from './Menu';

type MenuDataType = {
  menuItems: MenuItem[];
};

const data: MenuDataType = {
  menuItems: [
    {
      label: 'メニュー１',
      subtitle: 'サブタイトル１',
      children: [{ label: 'サブメニュー１', enabled: true, to: '#' }]
    },
    {
      label: 'メニュー２',
      subtitle: 'サブタイトル２',
      children: [
        { label: 'サブメニュー１', enabled: true, to: '#' },
        { label: 'サブメニュー２', enabled: true, to: '#' }
      ]
    }
  ]
};

const store = configureStore({
  initialState: { language: 'en', counter: 0 }
});

const stories = storiesOf('molecules.Menu', module);
const history = createHistory();

stories
  .addDecorator(story => (
    <Provider store={store}>
      <I18N>
        <Router history={history}>
          <Suspense fallback="loading">{story()}</Suspense>
        </Router>
      </I18N>
    </Provider>
  ))
  .add('Basic', () => <Menu menuItems={object('menuItems', data.menuItems)} />, { notes: 'Menu' });
