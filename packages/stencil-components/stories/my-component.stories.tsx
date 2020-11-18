// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { MyComponent } from '../components';

export default {
  title: 'Stencil (React)',
  component: MyComponent,
  args: {
    first: 'a',
    last: 'stencil component',
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    info: {
      text: `
        Some useful text should go here
      `,
    },
  },
};

export const StencilComponent = args => <MyComponent first="a" last="stencil component" {...args} />;
