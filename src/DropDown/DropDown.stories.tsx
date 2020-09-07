
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

export default {
  component: DropDown ,
  title: "DropDown"
};

export const Default = () => <DropDown title="Features" color="#416dea" options={options}/>;