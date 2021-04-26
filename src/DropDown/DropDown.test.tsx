import React from "react";
import { render } from "@testing-library/react";

import { Props } from "./DropDown.types";
import DropDown from "./DropDown";

describe("🔽 DropDown", () => {
  let props: Props;
  const dropDownTitle: string = "Test DropDown";

  beforeEach(() => {
    props = {
      title: dropDownTitle
    };
  });

  const renderComponent = () => render(<DropDown {...props} />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  }) 

  // it("has the title set correctly", () => {
  //   const component = renderComponent();
  //   const head = component.container.getElementsByTagName("a").item(0);

  //   expect(head?.textContent).toEqual(dropDownTitle);
  // });
});
