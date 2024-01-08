import RoadMapView from "../src/components/RoadMapView";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";

describe("RoadMapView", () => {
  beforeEach(() => {
    renderWithProviders(<RoadMapView></RoadMapView>);
  });
  it("loads the correct infromation from state", () => {
    expect(
      screen.getAllByRole("listitem")[0].textContent.match(/\d+$/)[0]
    ).toBe("2");
    expect(
      screen.getAllByRole("listitem")[1].textContent.match(/\d+$/)[0]
    ).toBe("3");
    expect(
      screen.getAllByRole("listitem")[2].textContent.match(/\d+$/)[0]
    ).toBe("1");
  });
});
