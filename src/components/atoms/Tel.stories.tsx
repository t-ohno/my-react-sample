import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import Tel from './Tel';

const stories = storiesOf('Tel', module);

stories.add('Basic', () => (
  <Tel
    defaultValue={text('defaultValue', 'Tel')}
    minLength={number('minLength', 1)}
    maxLength={number('maxLength', 10)}
    disabled={boolean('disabled', false)}
    onChange={action('change')}
  />
));
