import FeedBackDetail from "../src/components/FeedbackDetail";
import { Route, MemoryRouter, Routes } from "react-router-dom";
import { preloadedData } from "../utils/test-utils";
import { setupStore } from "../src/store/store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

describe("FeedBackDetail ", () => {
  const component = (
    <Provider store={setupStore(preloadedData)}>
      <MemoryRouter initialEntries={[`/feedbackdetail/${2}`]}>
        <Routes>
          <Route
            path="/feedbackdetail/:id"
            element={<FeedBackDetail></FeedBackDetail>}
          ></Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  test("renders the correct JSX ", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
