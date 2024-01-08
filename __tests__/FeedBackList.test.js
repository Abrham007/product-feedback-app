import FeedBackList from "../src/components/FeedBackList";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("FeedBackList", () => {
  it("shows the correct JSX when empty", () => {
    const component = renderer.create(
      <BrowserRouter>
        <FeedBackList listOfFeedback={[]} />
      </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
