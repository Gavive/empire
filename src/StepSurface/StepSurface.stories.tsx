import React from "react";

import { Position } from "./StepSurface.types";
import { StepSurface } from "./StepSurface";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import { withThemes } from 'storybook-addon-themes/react';
import styled, { ThemeProvider } from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

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
  component: StepSurface,
  title: "StepSurface",
  decorators: [withKnobs, withThemes],
  parameters: {
    layout: "fullscreen",
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

export const Default = (args) => (
  <AppContainer>
    <StepSurface position={Position.Right}
      {...args}
    />
  </AppContainer>
);

Default.args = {
};
