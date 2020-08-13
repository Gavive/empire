import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Props, State } from "./DropDown.types";

const Head = styled.a`
  font-family: 'Avenir', 'Helvetica', sans-serif;
  color: ${props => props.color};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${props => props.color};
  }
`;

Head.defaultProps = {
  color: "#44958c"
};

const Body = styled.ul`
  z-index: 1000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1em;
  list-style: none;
  box-shadow: 2px 2px 1px #eee;
  padding: 0em;
`;

const BodyItem = styled.li`
  color: ${props => props.color};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.75em;

  :hover {
    color: white;
    background: ${props => props.color};
  }
`;

BodyItem.defaultProps = {
  color: "#44958c"
};

export default class DropDown extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBody: false
    };
  }

  public onMouseEnterHead = () => {
    this.setState({ showBody: true });
  }

  public onMouseLeaveHead = () => {
    this.setState({ showBody: false });
  }

  public renderBodyItems(): JSX.Element[] {
    if (this.props.options) {
      this.props.options?.map(option => (
        <BodyItem color={this.props.color}>
          <a href={option.linkTo}>{option.label}</a>
        </BodyItem>
      ))
    }

    return [];
  }

  public render(): React.ReactNode {
    return (
      <div onMouseEnter={this.onMouseEnterHead}>
        <Head color={this.props.color}>
          {this.props.title}
        </Head>
        {
          this.state.showBody &&
          (
            <Body>
              {this.renderBodyItems()}
            </Body>
          )
        }
      </div>
    );
  }
}
