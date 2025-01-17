import React, { Component } from "react";
import styled from "styled-components";
import { Props, State, DropDownOption } from "./DropDown.types";

const Select = styled.select`
`;

const Option = styled.option`
`;

const OptionGroup = styled.optgroup`
`;

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
  color: "#416dea"
};

const Body = styled.ul`
  z-index: 1000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1em;
  list-style: none;
  box-shadow: 0 1em 2em hsl(0 0% 0% / 20%);
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
  color: "#416dea"
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
    this.setState({ showBody: !true });
  }

  public renderBodyItems(): JSX.Element[] {
    if (this.props.options) {
      return this.props.options?.map((option: DropDownOption, index: number) => (
        <Option
          key={index}
          color={this.props.color}
          label={option.label}
          disabled={option.disabled}
          value={option.value}
          selected={option.selected}
        />
      ));
    }

    return [];
  }

  public render(): React.ReactNode {
    return (
      <Select
        name={this.props.name}
        autoFocus={this.props.autoFocus}
        disabled={this.props.disabled}
        form={this.props.formId}
        multiple={this.props.multiple}
        required={this.props.required}
        size={this.props.size}
      >
        {this.renderBodyItems()}
      </Select>
    );
  }
}
