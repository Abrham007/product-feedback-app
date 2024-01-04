import React from "react";
import renderer from "react-test-renderer";
import CompanyName from "../src/components/CompanyName";

describe("CompanyName", () => {
  it("renders the correct JSX components", () => {
    const component = renderer.create(
      <CompanyName isOpen={false} setIsOpen={(prevValue) => !prevValue} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
