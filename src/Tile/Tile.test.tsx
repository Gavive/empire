import React from "react";
import { render } from "@testing-library/react";

import { Props } from "./Tile.types";
import Tile from "./Tile";

describe("🀄️ Tile", () => {
  let props: Props;

  beforeEach(() => {
    props = {
    };
  });

  const renderComponent = () => render(<Tile />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  }) 
});
