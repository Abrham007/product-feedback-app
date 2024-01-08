import renderer from "react-test-renderer";
import TagList from "../src/components/TagList";

describe("TagList", () => {
  it("renders the correct JSX when first mounted ", () => {
    const component = renderer.create(
      <TagList handleSuggestions={() => {}} suggestions={[]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the correct JSX after user clickes tag", () => {
    const component = renderer.create(
      <TagList handleSuggestions={() => {}} suggestions={[]} />
    );
    let root = component.root;
    renderer.act(() => {
      root.findAllByType("button")[3].props.onClick();
    });
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
