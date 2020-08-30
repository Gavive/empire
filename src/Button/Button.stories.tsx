import { Story } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import React from "react";
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';


import Button from "./Button";
import { Props } from './Button.types';

// const Template: Story<Props> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { label: 'Button' };
export default {
  component: Button ,
  title: 'Button',
  decorators: [withKnobs],
};

export const Default = () => <Button label={text('Label', 'Hello Storybook')} />;