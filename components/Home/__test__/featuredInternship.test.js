import { render, screen } from "@testing-library/react";
import FeaturedInternships from "../FeaturedInternships";

describe("Home", () => {
  it("renders correctly", () => {
    render(<FeaturedInternships />);
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });
});
