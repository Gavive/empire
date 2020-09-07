import React from "react";

import { ThemeProvider } from "styled-components";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import { withThemes } from 'storybook-addon-themes/react';


import Table from "./Table";

const Decorator = (props) => {
  let theme = lightTheme;

  if (props.theme && props.theme.name === "dark") {
    theme = darkTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default {
  component: Table ,
  title: "Table",
  decorators: [withKnobs, withThemes],
  parameters: {
    themes: {
      Decorator,
      list: [
        {
          name: "light",
          color: "#fff",
          default: true
        },
        {
          name: "dark",
          color: "#121212"
        }
      ]
    },
    controls: { expanded: true }
  }
};

type Property = {
  name: string;
  bedBath: string;
  boughtOn: string;
  cost: number;
  equity: number;
}

const darkTheme = {
  name: "dark",
  color: "white"
};

const lightTheme = {
  name: "light",
  color: "black"
};

export const Default = (args) => (
  <Table<Property>
    {...args}
  />
);

Default.args = {
  columns: [
    {
      key: "name",
      label: "🏡 Property"
    },
    {
      key: "bedBath",
      label: "🚿 Bed/Bath"
    },
    {
      key: "boughtOn",
      label: "📅 Bought on"
    },
    {
      key: "cost",
      label: "💰 Purchase price"
    },
    {
      key: "equity",
      label: "👍 Equity"
    }
  ],
  data: [
    {
      name: "402 S 43rd St",
      bedBath: "3 Bed, 1 Bath",
      boughtOn: "08/04/2020",
      cost: 379900,
      equity: 20000
    },
    {
      name: "870 S 39th St",
      bedBath: "3 Bed, 1.5 Bath",
      boughtOn: "08/05/2020",
      cost: 375000,
      equity: 23000
    },
    {
      name: "1423 Main St",
      bedBath: "1 Bed, 1 Bath",
      boughtOn: "09/01/2020",
      cost: 750000,
      equity: 34000
    },
    {
      name: "817 Broadway",
      bedBath: "2 Bed, 1 Bath",
      boughtOn: "09/05/2020",
      cost: 820000,
      equity: 60000
    },
    {
      name: "41 N 20th St",
      bedBath: "5 Bed, 3 Bath",
      boughtOn: "09/25/2020",
      cost: 140000,
      equity: 19000
    },
    {
      name: "423 Roman St",
      bedBath: "2 Bed, 2 Bath",
      boughtOn: "11/02/2020",
      cost: 280000,
      equity: 18000
    }
  ],
  showRowHoverBackground: false
};
