import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import Url from './Url';

const stories = storiesOf('Url', module);

stories.add('Basic', () => (
  <Url
    defaultValue={text('defaultValue', 'www.example.com')}
    minLength={number('minLength', 0)}
    maxLength={number('maxLength', 20)}
    disabled={boolean('disabled', false)}
    onChange={action('change')}
  />
));
