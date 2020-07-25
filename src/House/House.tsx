import React, { Component } from "react";
import "./House.scss";
import { State, Props } from "./House.types";

export default class House extends Component<Props, State> {

  public render(): React.ReactNode {
    return (
      <div className="house">
        Hello World
      </div>
    );
  }
}
