import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { TextInput } from '../../../src/components/legos/inputs/TextInput';

storiesOf('TextInput', module)
  .addParameters({
    info: {
      inline: true,
      text: `
      This is the generic form input box!
      `,
    },
  })
  .add('default', () => (
    <TextInput />
  ))
  .add('custom border color', () => (
    <TextInput borderColor="green" />
  ))
  .add('error state', () => (
    <TextInput error />
  ))
  .add('error state overrides custon border color', () => (
    <TextInput borderColor="green" error />
  ));
