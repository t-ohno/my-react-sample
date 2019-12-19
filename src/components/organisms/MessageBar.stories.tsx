import React, { Suspense } from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { MessageLevel } from 'app/types';
import MessageBar from './MessageBar';

const stories = storiesOf('organisms.MessageBar', module);

stories.add(
  'Basic',
  () => (
    <Suspense fallback="loading">
      <MessageBar
        messageLevel={select<number>(
          'messageLevel',
          {
            INFO: MessageLevel.INFO,
            WARN: MessageLevel.WARN,
            ERR: MessageLevel.ERR
          },
          0
        )}
        message={text('message', 'message')}
        onClose={() => {}}
      />
    </Suspense>
  ),
  { notes: 'MessageBar' }
);
