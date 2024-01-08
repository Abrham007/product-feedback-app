import SuggestionsSort from "../src/components/SuggestionsSort";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";

const mockHandleSort = jest.fn();
const sortList = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

describe("SuggestionsSort", () => {
  let component, tree;
  beforeEach(() => {
    component = renderer.create(
      <SuggestionsSort sortList={sortList} handleSort={mockHandleSort} />
    );
    tree = component.toJSON();
  });
  it("renders the correct JSX when first mounted ", () => {
    expect(tree).toMatchSnapshot();
  });

  it("renders the correct JSX after user clickes btn", () => {
    let root = component.root;
    renderer.act(() => {
      root.findByType("button").props.onClick();
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("sends the right choice to the parent", () => {
    render(<SuggestionsSort sortList={sortList} handleSort={mockHandleSort} />);
    fireEvent.click(screen.getAllByRole("button")[0]);
    fireEvent.click(screen.getAllByRole("button")[2]);
    expect(mockHandleSort.mock.calls).toHaveLength(1);
    expect(mockHandleSort.mock.calls[0][0]).toBe(1);
  });
});
