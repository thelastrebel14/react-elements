import type { Meta, StoryObj } from '@storybook/react';
import Coin from './Coin.component';
import { CoinSize } from './Coin.definitions';

// export default {
//     title: 'Example/Coin',
//     component: Coin,
// };

const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49AqXsCGnlcSFFs0tGPS8C72m137ObW4eefQ0C0yS52wOXnfKcXCP1sGfGNd5Vcf8j7w&usqp=CAU';
// export const Default = () => <Coin img={defaultImg} label='Korra' size='large'/>

const meta = {
    title: 'Example/Coin',
    component: Coin,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
  } satisfies Meta<typeof Coin>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Korra',
        imgAlt: 'Default'
    },
  };

  export const Small: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Korra',
        size: CoinSize.SMALL,
        imgAlt: 'Small'
    },
  };

  export const Medium: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Korra',
        size: CoinSize.MEDIUM,
        imgAlt: 'Medium'
    },
  };

  export const Large: Story = {
    args: {
        frontImg: defaultImg,
        label: 'Korra',
        size: CoinSize.LARGE,
        imgAlt: 'Large'
    },
  };