import React from "react";
import { render, screen } from "@testing-library/react";
import Locations from "../Locations";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Locations />);
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });
});