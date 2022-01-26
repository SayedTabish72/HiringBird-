import { render, screen } from "@testing-library/react";
import Categories from "../Categories";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Categories />);
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });
});
