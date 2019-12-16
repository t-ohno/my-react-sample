import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import File from './File';

const stories = storiesOf('File', module);

stories.add('Basic', () => (
  <File label={text('label', 'ファイル名')} disabled={boolean('disabled', false)} onChange={action('change')} />
));
