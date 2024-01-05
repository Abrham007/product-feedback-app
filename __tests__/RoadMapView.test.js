import RoadMapView from "../src/components/RoadMapView";
import { http, HttpResponse, delay } from "msw/browser";
import { setupServer } from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";

export const handlers = [
  http.get("http://127.0.0.1:4000/post", async () => {
    await delay(150);
    return HttpResponse.json([
      { status: "planned" },
      { status: "planned" },
      { status: "in-progress" },
      { status: "live" },
      { status: "live" },
    ]);
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("RoadMapView", () => {
  it("loads the correct infromation from state", () => {
    renderWithProviders(<RoadMapView></RoadMapView>);

    console.log(screen.getByRole("ul"));
  });
});
