import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import LoginUsername from './LoginUsername';

const stories = storiesOf('molecules.LoginUsername', module);

stories.add(
  'Basic',
  () => (
    <LoginUsername
      label={text('label', 'username')}
      defaultValue={text('defaultValue', 'username')}
      placeholder={text('placeholder', 'placeholder')}
      minLength={number('minLength', 1)}
      maxLength={number('maxLength', 10)}
      required={boolean('required', true)}
      disabled={boolean('disabled', false)}
      onChange={action('change')}
    />
  ),
  { notes: 'LoginUsername' }
);
