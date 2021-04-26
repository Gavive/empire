
import React from "react";
import DropDown from './DropDown';

import { DropDownOption } from './DropDown.types';

const options: DropDownOption[] = [
  {
    label: "Bulbasaur",
    value: 1
  },
  {
    label: "Ivysaur",
    value: 2
  },
  {
    label: "Venusaur",
    value: 3
  },
  {
    label: "Charmander",
    value: 4
  },
  {
    label: "Charmeleon",
    value: 5
  },
  {
    label: "Charizard",
    value: 6
  },
  {
    label: "Squirtle",
    value: 7
  },
  {
    label: "Wartotle",
    value: 8
  },
  {
    label: "Blastoise",
    value: 9
  },
  {
    label: "Caterpie",
    value: 10
  },
  {
    label: "Metapod",
    value: 11
  },
  {
    label: "Butterfree",
    value: 12
  },
  {
    label: "Weedle",
    value: 13
  },
  {
    label: "Kakuna",
    value: 14
  },
  {
    label: "Beedrill",
    value: 15
  }
];

export default {
  component: DropDown,
  title: "DropDown"
};

export const Default = () => <DropDown name="adsadas" title="Features" color="#416dea" options={options}/>;