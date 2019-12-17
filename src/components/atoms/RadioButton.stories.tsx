import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import RadioButton from './RadioButton';

const stories = storiesOf('atoms.RadioButton', module);

stories
  .add(
    'Basic',
    () => (
      <>
        <RadioButton
          name="radiobutton"
          label={text('label', 'radiobutton')}
          disabled={boolean('disabled', false)}
          onChange={action('change')}
        />
      </>
    ),
    { notes: 'RadioButton' }
  )
  .add(
    'Group',
    () => (
      <>
        <RadioButton
          name="radiobutton"
          value="1"
          label="radiobutton1"
          disabled={boolean('disabled', false)}
          onChange={action('change1')}
          defaultChecked={true}
        />
        <RadioButton
          name="radiobutton"
          value="2"
          label="radiobutton2"
          disabled={boolean('disabled', false)}
          onChange={action('change2')}
        />
        <RadioButton
          name="radiobutton"
          value="3"
          label="radiobutton3"
          disabled={boolean('disabled', false)}
          onChange={action('change3')}
        />
      </>
    ),
    { notes: 'RadioButton Group' }
  );
