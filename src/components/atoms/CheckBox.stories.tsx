import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import CheckBox from './CheckBox';

const stories = storiesOf('CheckBox', module);

stories.add('Basic', () => (
  <CheckBox
    disabled={boolean('disabled', false)}
    label={text('label', 'checkbox')}
    onChange={action('change')}
    defaultChecked={true}
  />
));
