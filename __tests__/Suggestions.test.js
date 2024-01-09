import Suggestions from "../src/components/Suggestions";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";

describe("Suggestions", () => {
  const server = setupServer(...handlers);
  beforeEach(() => {
    renderWithProviders(<Suggestions></Suggestions>);
  });

  test("loads the correct number of posts from state", async () => {
    expect((await screen.findAllByRole("link")).length - 2).toBe(6);
  });
  test("loads the correct number of posts when user clicks tab 'Enhancement'", async () => {
    fireEvent.click(await screen.findByText("Enhancement"));
    expect((await screen.findAllByRole("link")).length - 2).toBe(2);
  });
  test("loads the correct order of posts when user sorts the list", async () => {
    fireEvent.click(await screen.findByText(/most upvotes/i));
    fireEvent.click(await screen.findByText(/least upvotes/i));
    return screen.findAllByRole("heading").then((data) => {
      expect(data[3].textContent).toBe("Preview images not loading");
    });
  });
});
