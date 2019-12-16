import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import Email from './Email';

const stories = storiesOf('Email', module);

stories.add('Basic', () => (
  <Email
    defaultValue={text('defaultValue', 'email@example.com')}
    minLength={number('minLength', 1)}
    maxLength={number('maxLength', 10)}
    disabled={boolean('disabled', false)}
    onChange={action('change')}
  />
));
