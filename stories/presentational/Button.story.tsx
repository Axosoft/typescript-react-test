import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button } from '../../src/components/presentational/Button';

storiesOf('Styled Button', module)
  .addParameters({
    info: {
      header: false,
      // inline: true,
      text: `
      # The button component
      A primitive, generally look to more specific button implementations`,
    },
  })
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('primary', () => (
    <Button onClick={action('clicked')}>
      hello youtube!
    </Button>
  ));
