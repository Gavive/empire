import React from "react";
import { render } from "@testing-library/react";

import Summary from "./Summary";
import { Props } from "./Summary.types";
import { SummaryItem } from "./Summary.types";

describe("👯‍♂️ Summary", () => {
  let props: Props;
  const testItems: SummaryItem[]=[
    {
      label: "Test label 1",
      value: "Test value 1"
    },
    {
      label: "Test label 2",
      value: "Test value 2"
    },
    {
      label: "Test label 3",
      value: "Test value 3"
    }
  ];

  beforeEach(() => {
    props = {
      items: testItems
    };
  });

  const renderComponent = () => render(<Summary {...props} />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  })
});
