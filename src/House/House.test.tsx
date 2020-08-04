import React from "react";
import { render, screen } from "@testing-library/react";

import House from "./House";
import { Props } from "./House.types";

describe("🏠 House", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<House {...props} />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  })

  it("container has the correct elements", () => {
    const component = renderComponent();
    const container = component.container;
    const houseDiv = component.container.getElementsByTagName("div").item(0);
    const houseLabel = component.container.getElementsByTagName("label").item(0);
    const houseInput = component.container.getElementsByTagName("input").item(0);

    expect(container).toBeInTheDocument();
    expect(container.hasChildNodes()).toBe(true);
    expect(container.childElementCount).toBe(3);

    expect(houseDiv).toHaveClass("house");
    expect(houseDiv?.id).toEqual("house");
    expect(houseDiv?.getAttribute("data-rooms")).toEqual("1");

    expect(houseLabel).toHaveClass("house-label");
    expect(houseLabel?.id).toEqual("label");
    expect(houseLabel?.getAttribute("for")).toEqual("range");
    expect(houseLabel?.getAttribute("data-rooms")).toEqual("1");

    expect(houseInput).not.toHaveClass();
    expect(houseInput?.id).toBe("range");
    expect(houseInput?.getAttribute("min")).toBe("1");
    expect(houseInput?.getAttribute("max")).toBe("6");
    expect(houseInput?.getAttribute("step")).toBe("1");
    expect(houseInput?.getAttribute("value")).toBe("1");
    expect(houseInput?.getAttribute("type")).toBe("range");
    expect(houseInput?.getAttribute("onChange")).toBeDefined();
  });
});
