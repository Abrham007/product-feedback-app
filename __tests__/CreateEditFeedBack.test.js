import CreateEditFeedBack from "../src/components/CreateEditFeedBack";
import { Route, MemoryRouter, Routes, BrowserRouter } from "react-router-dom";
import { preloadedData } from "../utils/test-utils";
import { setupStore } from "../src/store/store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

describe("CreateEditFeedBack", () => {
  describe("on create", () => {
    const component = (
      <Provider store={setupStore(preloadedData)}>
        <BrowserRouter>
          <CreateEditFeedBack></CreateEditFeedBack>
        </BrowserRouter>
      </Provider>
    );
    test("renders the correct JSX", () => {
      let tree = renderer.create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("on edit", () => {
    test("renders the correct JSX", () => {
      let component = renderer.create(
        <Provider store={setupStore(preloadedData)}>
          <MemoryRouter initialEntries={[`/edit/${1}`]}>
            <Routes>
              <Route
                path="/edit/:id"
                element={
                  <CreateEditFeedBack isEdit={true}></CreateEditFeedBack>
                }
              ></Route>
            </Routes>
          </MemoryRouter>
        </Provider>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
