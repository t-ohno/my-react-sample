import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import Number from './Number';

const stories = storiesOf('Number', module);

stories.add('Basic', () => (
  <Number
    defaultValue={number('defaultValue', 123)}
    minLength={number('minLength', 1)}
    maxLength={number('maxLength', 3)}
    min={number('min', 0)}
    max={number('max', 999)}
    disabled={boolean('disabled', false)}
    onChange={action('change')}
  />
));
