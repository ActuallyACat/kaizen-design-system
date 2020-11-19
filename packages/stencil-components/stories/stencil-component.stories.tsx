// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { StencilButton } from '../components';

export default {
  title: 'Stencil Button',
  component: StencilButton,
  args: {
    label: 'label',
    disabled: false,
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
};

export const StencilComponent = args => <StencilButton disabled {...args} />;
