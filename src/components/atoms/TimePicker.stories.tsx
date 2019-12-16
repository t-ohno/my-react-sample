import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, text } from '@storybook/addon-knobs';
import TimePicker from './TimePicker';

const stories = storiesOf('TimePicker', module);

stories.add('Basic', () => (
  <TimePicker
    isClearable={boolean('isClearable', true)}
    selected={object('selected', new Date())}
    dateFormat={text('dateFormat', 'HH:mm')}
    timeFormat={text('timeFormat', 'HH:mm')}
    timeCaption={text('timeCaption', '時刻')}
    disabled={boolean('disabled', false)}
    onChange={action('change')}
  />
));
