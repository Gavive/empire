import React from "react";
import styled from "styled-components";

import { Props, State } from "./TextBox.types";

// TODO: Use theme to change styling
// Inspiration: https://codepen.io/vreddi/pen/XWpvRXV
const Input = styled.input`
  background: linear-gradient(145deg, #F2F7FB, #E9F2FB);
  resize: none;
  box-shadow: inset 8px 8px 15px #D9E3EC;
  border-radius: 12px;
  border: none;
  overflow: auto;
  padding: 10px;
  outline: none;

  ::placeholder {
    color: #828284;
  }

  :disabled {
    color: #828284;
    background: linear-gradient(145deg, #e5e8ea, #cecece);
    box-shadow: inset 8px 8px 15px #bbbdbf;
  }
`;

const Label = styled.div<{focus: boolean}>`
  font-size: 0.9rem;
  padding-left: 0.4rem;
  color:${props => props.focus ? "#1E71F5": "#525252"};
`;

export class TextBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      focus: false
    };
  }

  public render(): React.ReactNode {
    return (
      <div className={this.props.className}>
        <Label focus={this.state.focus}>{this.props.label}</Label>
        <Input
          aria-label={this.props.ariaLabel || this.props.label}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          disabled={this.props.disabled}
          autoComplete={this.props.autoComplete}
          required={this.props.required}
          onChange={this.props.onChange}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
        />
      </div>
    );
  }
}
