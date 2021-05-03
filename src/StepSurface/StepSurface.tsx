import React from "react";
import styled from "styled-components";

import { Props } from "./StepSurface.types";

const Surface = styled.div<Partial<Props>>`
  height: 100vh;
  width: ${props => !!props.width ? `${props.width}px` : "500px"};
  max-width: 50%;
  float: ${props => props.position};
  background-color: ${props => props.theme?.surface?.backgroundColor};
  box-shadow: -0.5rem 0rem 3.2rem ${props => props.theme?.surface?.shadowColor};
`;

export class StepSurface extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <Surface position={this.props.position} width={this.props.width}>
        {this.props.children}
      </Surface>
    );
  }
}
