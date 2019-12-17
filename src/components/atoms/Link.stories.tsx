import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import Link from './Link';

const stories = storiesOf('atoms.Link', module);

stories.add(
  'Basic',
  () => (
    <Link
      href={text('href', 'https://www.google.com/')}
      rel={text('rel', 'noreferrer')}
      target={text('target', '_blank')}
      disabled={boolean('disabled', false)}
      onClick={action('click')}
    >
      {text('text', 'hyperlink')}
    </Link>
  ),
  { notes: 'Link' }
);
