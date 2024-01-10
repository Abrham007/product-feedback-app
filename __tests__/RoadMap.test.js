import RoadMap from "../src/components/RoadMap";
import { preloadedData } from "../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../src/store/store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

describe("RoadMap", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("renders the correct JSX on first mount", () => {
    const component = renderer.create(
      <Provider store={setupStore(preloadedData)}>
        <BrowserRouter>
          <RoadMap></RoadMap>
        </BrowserRouter>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
