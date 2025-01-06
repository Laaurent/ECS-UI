import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { BivComponent } from '../app/components/biv/biv.component';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  DESTRUCTIVE = 'destructive',
  CONSTRUCTIVE = 'constructive',
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BivComponent> = {
  title: "Complexe/Bandeau d'identification",
  component: BivComponent,
  tags: ['autodocs'],
  argTypes: {
    gender: {
      control: {
        type: 'radio',
        options: ['Féminin', 'Masculin'],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<BivComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Full: Story = {
  args: {
    isSmall: false,
    nameUsed: "LOHEAC--DE SAINTE MARIE D'AGNE",
    birthName: 'VAN DER LICHTENSTEINBURG',
    firstnameUsed: 'PEKKA',
    birthFirstname: 'PAUL',
    gender: 'Masculin',
    birthDate: 1735772400000,
    ins: '100025763178979',
    ipp: '1656',
    insIsVerified: false,
    age: 65,
    weight: 71,
    bed: '004',
    date: Date.now(),
  },
};

export const Light: Story = {
  args: {
    isSmall: true,
    nameUsed: "LOHEAC--DE SAINTE MARIE D'AGNE",
    birthName: 'VAN DER LICHTENSTEINBURG',
    firstnameUsed: 'PEKKA',
    birthFirstname: 'PAUL',
    gender: 'Masculin',
    birthDate: 1737068400000,
    ins: '100025763178979',
    ipp: '1656',
    insIsVerified: false,
    age: 65,
    weight: 71,
    bed: '004',
    date: Date.now(),
  },
};
