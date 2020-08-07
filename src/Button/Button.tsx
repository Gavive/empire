import React, { Component } from "react";
import { Props, State } from "./Button.types";

import "./Button.scss";

export default class Button extends Component<Props, State> {
  public render(): React.ReactNode {
    return (
      <button
        className="button"
        aria-disabled={this.props.disabled}
        aria-describedby={this.props.ariaDescription}
        aria-hidden={this.props.ariaHidden}
        aria-label={this.props.ariaLabel || this.props.label}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}
