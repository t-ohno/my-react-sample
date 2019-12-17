import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import Password from './Password';

const stories = storiesOf('atoms.Password', module);

stories.add(
  'Basic',
  () => (
    <Password
      defaultValue={text('defaultValue', 'Password')}
      minLength={number('minLength', 1)}
      maxLength={number('maxLength', 10)}
      disabled={boolean('disabled', false)}
      onChange={action('change')}
    />
  ),
  { notes: 'Password' }
);
