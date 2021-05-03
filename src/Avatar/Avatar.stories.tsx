import React from "react";

import { Avatar } from "./Avatar";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import { withThemes } from 'storybook-addon-themes/react';
import styled, { ThemeProvider } from "styled-components";
import { AvatarSize } from "./Avatar.types";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AvatarDisplayContainerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 60%;
  margin-top: 10px;
  margin-bottom: 80px;
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
  component: Avatar,
  title: "Avatar",
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
    <AvatarDisplayContainerContainer>
      <Avatar
        image= "https://i.pinimg.com/originals/3a/01/83/3a018343ae728ec74380f0fa208d4e7a.jpg"
        size={AvatarSize.ExtraSmall}
      />
      <Avatar
        image= "https://i.pinimg.com/originals/3a/01/83/3a018343ae728ec74380f0fa208d4e7a.jpg"
        size={AvatarSize.Small}
      />
      <Avatar
        image= "https://i.pinimg.com/originals/3a/01/83/3a018343ae728ec74380f0fa208d4e7a.jpg"
        size={AvatarSize.Medium}
      />
      <Avatar
        image= "https://i.pinimg.com/originals/3a/01/83/3a018343ae728ec74380f0fa208d4e7a.jpg"
        size={AvatarSize.Large}
      />
      <Avatar
        image= "https://i.pinimg.com/originals/3a/01/83/3a018343ae728ec74380f0fa208d4e7a.jpg"
        size={AvatarSize.ExtraLarge}
      />
    </AvatarDisplayContainerContainer>
    <Avatar
      {...args}
    />
  </AppContainer>
);

Default.args = {
};
