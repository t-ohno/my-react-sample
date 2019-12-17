import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

const stories = storiesOf('atoms.Logo', module);

stories.add('Basic', () => <Logo />, { notes: 'Logo' });
