import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const stories = storiesOf('ImageButton', module);

stories
  .add('LoginButton', () => <LoginButton disabled={boolean('disabled', false)} onClick={action('login')}></LoginButton>)
  .add('LogoutButton', () => (
    <LogoutButton disabled={boolean('disabled', false)} onClick={action('logout')}></LogoutButton>
  ));
