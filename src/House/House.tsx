import React, { Component, Fragment, createRef, RefObject } from "react";
import { State, Props } from "./House.types";

import "./House.scss";

export default class House extends Component<Props, State> {
  public house: RefObject<HTMLDivElement>;
  public label: RefObject<HTMLLabelElement>;
  public range: RefObject<HTMLInputElement>;

  public constructor(props: Props) {
    super(props);

    this.state = {
      roomCount: 1
    };

    this.house = createRef();
    this.label = createRef();
    this.range = createRef();
  }

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newRooms = event.target.value;

    const prevRooms: string = this.house.current?.getAttribute("data-rooms") as string;
    this.house.current?.setAttribute("data-prev-rooms", prevRooms);
    this.house.current?.setAttribute("data-rooms", newRooms);
    
    this.label.current?.setAttribute("data-prev-rooms", prevRooms);
    this.label.current?.setAttribute("data-rooms", newRooms);
    this.label.current?.setAttribute("data-rooms-delta", (parseInt(newRooms) - parseInt(prevRooms)).toString());

    this.setState({ roomCount: parseInt(newRooms) })
  }

  public render(): React.ReactNode {
    return (
      <Fragment>
        <div ref={this.house} className="house" id="house" data-rooms={this.state.roomCount}>
          <div className="house-wings" data-flip-key="wings">
            <div className="house-left-wing">
              <div className="house-window"></div>
              <div className="house-window"></div>
              <div className="house-sparkle">
                <div className="house-sparkle-dots"></div>
              </div>
            </div>
            <div className="house-right-wing">
              <div className="house-window"></div>
              <div className="house-window"></div>
              <div className="house-sparkle">
                <div className="house-sparkle-dots"></div>
              </div>
            </div>
            <div className="house-roof">
              <div className="house-ledge"></div>
            </div>
          </div>
          <div className="house-front" data-flip-key="front">
            <div className="house-chimney"></div>
            <div className="house-facade"></div>
            <div className="house-window">
              <div className="house-sparkle">
                <div className="house-sparkle-dots"></div>
              </div>
            </div>
            <div className="house-doorway">
              <div className="house-stairs"></div>
              <div className="house-door"></div>
            </div>
            <div className="house-gable">
              <div className="house-roof">
                <div className="house-ledge"></div>
              </div>
            </div>
          </div>
        </div>

        <label
          ref={this.label}
          className="house-label"
          htmlFor="range"
          id="label"
          data-rooms={this.state.roomCount}
        >
          Rooms
        </label>
        <input
          ref={this.range}
          type="range"
          min="1"
          max="6"
          step="1"
          defaultValue="1"
          onChange={this.onInputChange}
          id="range"
        />
      </Fragment>
    );
  }
}
