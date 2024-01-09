import { screen } from "@testing-library/dom";
import CreateEditFeedBack from "../src/components/CreateEditFeedBack";
import { renderWithProviders } from "../utils/test-utils";
import { Route, MemoryRouter, Routes, BrowserRouter } from "react-router-dom";

describe("CreateEditFeedBack", () => {
  test("renders the correct JSX on create", () => {
    renderWithProviders(
      <BrowserRouter>
        <CreateEditFeedBack></CreateEditFeedBack>
      </BrowserRouter>
    );
    expect(screen.getAllByRole("heading").length).toBe(4);
    expect(screen.getAllByRole("button").length).toBe(3);
  });
  test("renders the correct JSX on edit", () => {
    const title = "Add tags for solutions";
    const description =
      "Easier to search for solutions based on a specific stack.";
    renderWithProviders(
      <MemoryRouter initialEntries={[`/edit/${1}`]}>
        <Routes>
          <Route
            path="/edit/:id"
            element={<CreateEditFeedBack isEdit={true}></CreateEditFeedBack>}
          ></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("textbox", {
        name: "Feedback Title Add a short, descriptive headline",
      }).value
    ).toBe(title);
    expect(
      screen.getByRole("textbox", {
        name: "Feedback Detail Include any specific comments on what should be improved, added, etc.",
      }).value
    ).toBe(description);
    expect(
      screen.getByRole("heading", { name: `Editing ‘${title}’` })
    ).toBeTruthy();
    expect(screen.getAllByRole("heading").length).toBe(5);
    expect(screen.getAllByRole("button").length).toBe(4);
  });
});
