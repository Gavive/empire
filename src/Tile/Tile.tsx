import React, { Component } from "react";
import styled from "styled-components";

import { State, Props } from "./Tile.types";
import { getBoxShadow } from "./Tile.styles";

const TileContainer = styled.div<Props>`
  box-shadow: ${getBoxShadow};
  background: ${props => props.background};
  line-height: 1.5;
  width: ${props => `${props.width}em`};
  height: ${props => `${props.height}em`};
  display: flex;
  place-items: center;
  text-align: center;
  padding: ${props => `${props.padding}em`};
  border-radius: 2ch;
  border: 1px solid hsl(0 0% 83%);
`;

TileContainer.defaultProps = {
  height: 15,
  width: 15,
  shadowType: "saturated",
  background: "#fff",
  padding: 1
};

export default class Tile extends Component<Props, State> {
  public render(): React.ReactNode {
    return (
      <TileContainer
        {...this.props}
        role="presentation"
      >
        {this.props.children}
      </TileContainer>
    );
  }
}
