import React from "react";
import renderer from "react-test-renderer";
import CompanyName from "../src/components/CompanyName";

it("changes the state isOpen when clicked", () => {
  const component = renderer.create(
    <CompanyName isOpen={isOpen} setIsOpen={setIsOpen} />
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
