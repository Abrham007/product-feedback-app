import FeedBackDetail from "../src/components/FeedbackDetail";
import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../utils/test-utils";
import { Route, MemoryRouter, Routes } from "react-router-dom";

describe("FeedBackDetail ", () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/feedbackdetail/${2}`]}>
        <Routes>
          <Route
            path="/feedbackdetail/:id"
            element={<FeedBackDetail></FeedBackDetail>}
          ></Route>
        </Routes>
      </MemoryRouter>
    );
  });
  test("renders the correct post ", () => {
    const title = "Add a dark theme option";
    expect(screen.getAllByRole("heading")[0].textContent).toBe(title);
  });
  test("rednders the correct the correct comments", () => {
    const commentGiver1 = "Elijah Moss";
    const commentGiver2 = "James Skinner";
    expect(screen.getAllByRole("heading")[2].textContent).toBe(commentGiver1);
    expect(screen.getAllByRole("heading")[3].textContent).toBe(commentGiver2);
  });
  test("renders the correct replay", () => {
    const replayGiver1 = "Anne Valentine";
    const replayGiver2 = "Ryan Welles";
    expect(screen.getAllByRole("heading")[4].textContent).toBe(replayGiver1);
    expect(screen.getAllByRole("heading")[5].textContent).toBe(replayGiver2);
  });
});
