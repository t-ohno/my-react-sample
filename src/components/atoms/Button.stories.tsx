import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import 'tippy.js/dist/tippy.css';

const stories = storiesOf('Button', module);

stories.add('Basic', () => (
  <Button
    disabled={boolean('disabled', false)}
    tooltipContent={text('tooltipContent', 'ボタンです')}
    onClick={action('Click!')}
  >
    {text('ラベル', 'Click Me')}
  </Button>
));
