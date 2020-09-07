import React from "react";
import { render } from "@testing-library/react";

import { Props } from "./Table.types";
import Table from "./Table";

type TestData = {
  test1: string;
  test2: number;
}

describe("🏓 Table", () => {
  let props: Props<TestData>;

  beforeEach(() => {
    props = {
      data: [
        {
          test1: "TestValue1",
          test2: 0
        },
        {
          test1: "TestValue2",
          test2: 1
        }
      ],
      columns: [
        {
          key: "test1",
          label: "Test1"
        },
        {
          key: "test2",
          label: "Test2"
        }
      ]
    };
  });

  const renderComponent = () => render(<Table {...props} />);

  it("to match snapshot", () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  }) 
});
