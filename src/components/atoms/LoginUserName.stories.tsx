import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import LoginUserName from './LoginUserName';

const stories = storiesOf('LoginUserName', module);

stories.add('Basic', () => <LoginUserName name={text('text', 'login user name')} />);
