import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button } from '../../src/components/primitives/Button';

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
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('primary', () => (
    <Button onClick={action('clicked')} primary>
      hello youtube!
    </Button>
  ));
  // .add('color override', () => (
  //   <Button color="tomato" background="paleviolet">asdf</Button>
  // ));
