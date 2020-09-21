import React from "react";
import { render } from "@testing-library/react";

import Panel from "./Panel";
import { Props } from "./Panel.types";

describe("👽 Panel", () => {
  let props: Props;
  const panelTitle: string = "Test panel title";
  const panelSubTitle: string = "Test panel sub title"

  beforeEach(() => {
    props = {
      title: panelTitle,
      subTitle: panelSubTitle
    };
  });

  const renderComponent = () => render(<Panel {...props} />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  })
});
