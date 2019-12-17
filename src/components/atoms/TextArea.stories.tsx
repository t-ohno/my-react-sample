import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import TextArea from './TextArea';

const stories = storiesOf('atoms.TextArea', module);

stories.add(
  'Basic',
  () => (
    <TextArea
      defaultValue={text('defaultValue', 'TextArea')}
      placeholder={text('placeholder', 'placeholder')}
      minLength={number('minLength', 0)}
      maxLength={number('maxLength', 100)}
      disabled={boolean('disabled', false)}
      onChange={action('change')}
    />
  ),
  { notes: 'TextArea' }
);
