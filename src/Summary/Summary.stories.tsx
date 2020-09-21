import React from "react";

import styled, { ThemeProvider } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";
import { withThemes } from "storybook-addon-themes/react";
import { Props as PanelProps, SummaryItem } from "./Summary.types";

import Summary from "./Summary";

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
  component: Summary,
  title: "Summary",
  decorators: [withKnobs, withThemes],
  parameters: {
    layout: 'fullscreen',
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

const darkTheme = {
  name: "dark",
  color: "white"
};

const lightTheme = {
  name: "light",
  color: "black"
};

function getSummaryItems(): SummaryItem[] {
  return [
    {
      label: "Name",
      value: "Emma Baasch"
    },
    {
      label: "Age",
      value: 23
    },
    {
      label: "Profession",
      value: "Designer 2"
    },
    {
      label: "Current mood",
      value: "🤩"
    },
    {
      label: "Last sign in",
      value: (new Date("09/10/2020")).toLocaleString()
    }
  ];
}

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const SummaryContainer = styled.div`
  width: 20em;
`;

export const Default = (args) => (
  <StoryContainer>
    <SummaryContainer>
      <Summary {...args} />
    </SummaryContainer>
  </StoryContainer>
);

Default.args = {
  items: getSummaryItems()
};
