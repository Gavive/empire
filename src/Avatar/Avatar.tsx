import React from "react";
import styled, { keyframes, css } from "styled-components";

import { Props } from "./Avatar.types";
import { getSizeStyle } from "./Avatar.helper";

const float = keyframes`
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`;

const StyledAvatar = styled.div<Partial<Props>>`
  width: ${props => getSizeStyle(props.size)};
  height: ${props => getSizeStyle(props.size)};
  box-sizing: border-box;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  transform: translatey(0px);
  ${props => props.float && css`animation: ${float} ${props.floatDuration || 4}s ease-in-out infinite;`}
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  img { width: 100%; height: auto; }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .5s ease;
  backface-visibility: hidden;
`;

export class Avatar extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <StyledAvatar
        size={this.props.size}
        image={this.props.image}
        float={this.props.float}
      />
    );
  }
}
