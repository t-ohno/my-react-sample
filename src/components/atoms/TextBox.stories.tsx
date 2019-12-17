import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import TextBox from './TextBox';

const stories = storiesOf('atoms.TextBox', module);

stories.add(
  'Basic',
  () => (
    <TextBox
      defaultValue={text('defaultValue', 'textbox')}
      placeholder={text('placeholder', 'placeholder')}
      minLength={number('minLength', 1)}
      maxLength={number('maxLength', 10)}
      disabled={boolean('disabled', false)}
      onChange={action('change')}
    />
  ),
  { notes: 'TextBox' }
);
