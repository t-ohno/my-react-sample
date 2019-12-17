import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, text } from '@storybook/addon-knobs';
import DatePicker from './DatePicker';

const stories = storiesOf('atoms.DatePicker', module);

stories.add(
  'Basic',
  () => (
    <DatePicker
      isClearable={boolean('isClearable', true)}
      selected={object('selected', new Date())}
      dateFormat={text('dateFormat', 'yyyy-MM-dd')}
      disabled={boolean('disabled', false)}
      onChange={action('change')}
    />
  ),
  { notes: 'DatePicker' }
);
