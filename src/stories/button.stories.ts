import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from '../app/components/button/button.component';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  DESTRUCTIVE = 'destructive',
  CONSTRUCTIVE = 'constructive',
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    withIcon: {
      control: {
        type: 'boolean',
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          ButtonType.PRIMARY,
          ButtonType.SECONDARY,
          ButtonType.OUTLINE,
          ButtonType.GHOST,
          ButtonType.DESTRUCTIVE,
          ButtonType.CONSTRUCTIVE,
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    type: ButtonType.PRIMARY,
    size: 'medium',
    withIcon: true,
    withLabel: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    type: ButtonType.SECONDARY,
    withIcon: true,
    withLabel: true,
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    type: ButtonType.OUTLINE,
    withIcon: true,
    withLabel: true,
  },
};

export const Ghost: Story = {
  args: {
    label: 'Button',
    type: ButtonType.GHOST,
    withIcon: true,
    withLabel: true,
  },
};

export const Destructive: Story = {
  args: {
    label: 'Button',
    type: ButtonType.DESTRUCTIVE,
    withIcon: true,
    withLabel: true,
  },
};

export const Constructive: Story = {
  args: {
    label: 'Button',
    type: ButtonType.CONSTRUCTIVE,
    withIcon: true,
    withLabel: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    type: 'primary',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    type: 'primary',
  },
};
