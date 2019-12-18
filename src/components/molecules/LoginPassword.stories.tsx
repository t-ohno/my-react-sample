import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import LoginPassword from './LoginPassword';

const stories = storiesOf('molecules.LoginPassword', module);

stories.add(
  'Basic',
  () => (
    <LoginPassword
      label={text('label', 'password')}
      defaultValue={text('defaultValue', 'password')}
      placeholder={text('placeholder', 'placeholder')}
      minLength={number('minLength', 0)}
      maxLength={number('maxLength', 10)}
      required={boolean('required', true)}
      disabled={boolean('disabled', false)}
      onChange={action('change')}
    />
  ),
  { notes: 'LoginPassword' }
);
