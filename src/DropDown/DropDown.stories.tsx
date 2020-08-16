import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import React from "react";

import DropDown from './DropDown';
import { DropDownOption } from './DropDown.types';

const options: DropDownOption[] = [
  {
    label: "Team management",
    linkTo: null
  },
  {
    label: "Metrics",
    linkTo: null
  }
];

storiesOf("DropDown", module)
  .addDecorator(centered)
  .add("Default", () => <DropDown title="Features" color="#416dea" options={options}/>)