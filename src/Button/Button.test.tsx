import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";
import { Props } from "./Button.types";

describe("🔳 Button", () => {
  let props: Props;
  const buttonLabel: string = "Test button";

  beforeEach(() => {
    props = {
      label: buttonLabel
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  })

  it("container has the correct elements", () => {
    const component = renderComponent();
    const container = component.container;
    const button = component.container.getElementsByTagName("button").item(0);

    expect(container).toBeInTheDocument();
    expect(container.hasChildNodes()).toBe(true);
    expect(container.childElementCount).toBe(1);

    expect(button).toHaveClass("button");
    expect(button?.textContent).toEqual(buttonLabel);
  });

  it("[Accessibility] has aria-label correctly set", () => {
    // Check if default aria-label is used
    const component = renderComponent();
    const button = component.container.getElementsByTagName("button").item(0);

    expect(button?.getAttribute("aria-label")).toEqual(buttonLabel);

    // Check setting aria-label explicitly works
    const testAriaLabel: string = "Test aria-label";
    const componentWithAriaLabel = render(<Button ariaLabel={testAriaLabel} label={buttonLabel} />);
    const buttonWithAriaLabel = componentWithAriaLabel.container.getElementsByTagName("button").item(0);

    expect(buttonWithAriaLabel?.getAttribute("aria-label")).toEqual(testAriaLabel);
  });

  it("[Accessibility] has aria-disabled correctly set", () => {
    // disbaled prop not provided
    const component = renderComponent();
    const button = component.container.getElementsByTagName("button").item(0);

    expect(button?.getAttribute("aria-disabled")).toEqual(null);

    // disbaled prop provided
    const componentWithAriaDisabled = render(<Button disabled label={buttonLabel} />);
    const buttonWithAriaDisabled = componentWithAriaDisabled.container.getElementsByTagName("button").item(0);

    expect(buttonWithAriaDisabled?.getAttribute("aria-disabled")).toEqual("true");
  });

  it("[Accessibility] has aria-description correctly set", () => {
    // ariaDescription prop not provided
    const component = renderComponent();
    const button = component.container.getElementsByTagName("button").item(0);

    expect(button?.getAttribute("aria-describedby")).toEqual(null);

    // disbaled prop provided
    const componentWithAriaDescription = render(<Button ariaDescription="Test description" label={buttonLabel} />);
    const buttonWithAriaDescription  = componentWithAriaDescription.container.getElementsByTagName("button").item(0);

    expect(buttonWithAriaDescription?.getAttribute("aria-describedby")).toEqual("Test description");
  });

  it("[Accessibility] has aria-hidden correctly set", () => {
    // ariaDescription prop not provided
    const component = renderComponent();
    const button = component.container.getElementsByTagName("button").item(0);

    expect(button?.getAttribute("aria-hidden")).toEqual(null);

    // disbaled prop provided
    const componentWithAriaHidden = render(<Button ariaHidden label={buttonLabel} />);
    const buttonWithAriaHidden = componentWithAriaHidden.container.getElementsByTagName("button").item(0);

    expect(buttonWithAriaHidden?.getAttribute("aria-hidden")).toEqual("true");
  });

  it("calls 'onClick' prop on button click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick} label={buttonLabel} />);

    fireEvent.click(getByText(buttonLabel));
    expect(onClick).toHaveBeenCalled();
  });
});
