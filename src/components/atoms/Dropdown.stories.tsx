import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, array, text } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const phoneticCodes = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliet',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-ray',
  'Yankee',
  'Zulu'
];

const items = array('Items', phoneticCodes);

const stories = storiesOf('Dropdown', module);

stories.add('Basic', () => (
  <Dropdown value={text('value', 'Tango')} disabled={boolean('disabled', false)} onChange={action('change')}>
    {items.map((d, i) => (
      <DropdownItem key={i} value={d}>
        {d}
      </DropdownItem>
    ))}
  </Dropdown>
));
