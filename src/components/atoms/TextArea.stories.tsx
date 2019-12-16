import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import TextArea from './TextArea';

const stories = storiesOf('TextArea', module);

stories.add('Basic', () => (
  <TextArea
    defaultValue={text('defaultValue', 'TextArea')}
    minLength={number('minLength', 0)}
    maxLength={number('maxLength', 100)}
    disabled={boolean('disabled', false)}
    onChange={action('change')}
  />
));
