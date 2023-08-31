import type { Meta, StoryObj } from '@storybook/react';
import Coin from './Coin.component';
import { CoinSize } from './Coin.definitions';
import storybookLogo from '../../assets/storybook.svg';

const defaultImg = storybookLogo;

const meta = {
    title: 'Example/Coin',
    component: Coin,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Coin>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Storybook',
        imgAlt: 'Default'
    },
  };

  export const Small: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Storybook',
        size: CoinSize.SMALL,
        imgAlt: 'Small'
    },
  };

  export const Medium: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Storybook',
        size: CoinSize.MEDIUM,
        imgAlt: 'Medium'
    },
  };

  export const Large: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Storybook',
        size: CoinSize.LARGE,
        imgAlt: 'Large'
    },
  };