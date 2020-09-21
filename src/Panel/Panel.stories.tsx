import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";
import { withThemes } from "storybook-addon-themes/react";
import { Props as PanelProps } from "./Panel.types";

import Panel from "./Panel";
import Button from "../Button/Button";

type User = {
  name: string;
  age: number;
  image: string;
  title: string
}

const ButtonContainer = styled.div`
  margin-top: 2em;
  margin-left: 2em;
`;

const Image = styled.img`
  margin-top: 1em;
`;

const PanelContentContainer = styled.div`
  display: flex;
  justify-content: center;
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

const EmmaBaasch: User = {
  name: "Emma Baasch",
  age: 23,
  title: "Designer 2",
  image: "https://i.ytimg.com/vi/_joUTZzb9gY/maxresdefault.jpg"
};

const NaomiMori: User = {
  name: "Naomi Mori",
  age: 24,
  title: "Product Manager 2",
  image: "https://i.ytimg.com/vi/3cEionTTxZs/maxresdefault.jpg"
};

const TiffanyWood: User = {
  name: "Tiffany Wood",
  age: 22,
  title: "Software Engineer",
  image: "https://i.pinimg.com/736x/56/33/57/563357f95034ac4ebda3cb9aaf5520d8.jpg"
};

const DaisyLawrence : User = {
  name: "Daisy Lawrence",
  age: 25,
  title: "Senior Software Engineer",
  image: "https://i.ytimg.com/vi/QwISTCaSLJA/maxresdefault.jpg"
};

export default {
  component: Panel ,
  title: "Panel",
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

class StoryComponent extends Component<{ args: PanelProps }, { isOpen: boolean, user: User }> {
  constructor(props: { args: PanelProps }) {
    super(null);

    this.state = {
      isOpen: props.args.isOpen,
      user: EmmaBaasch
    };
  }

  render() {
    return (
      <React.Fragment>
        <ButtonContainer>
          <Button label={EmmaBaasch.name} onClick={() => this.setState({ isOpen: true, user: EmmaBaasch })}/>
        </ButtonContainer>
        <ButtonContainer>
          <Button label={NaomiMori.name} onClick={() => this.setState({ isOpen: true, user: NaomiMori })}/>
        </ButtonContainer>
        <ButtonContainer>
          <Button label={TiffanyWood.name} onClick={() => this.setState({ isOpen: true, user: TiffanyWood })}/>
        </ButtonContainer>
        <ButtonContainer>
          <Button label={DaisyLawrence.name} onClick={() => this.setState({ isOpen: true, user: DaisyLawrence })}/>
        </ButtonContainer>
        <Panel
          title={this.state.user.name}
          subTitle={this.state.user.title}
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <PanelContentContainer>
            <Image src={this.state.user.image} />
          </PanelContentContainer>
        </Panel>
      </React.Fragment>
    );
  }
}


export const Default = (args) => <StoryComponent args={args} />;

Default.args = {
};
