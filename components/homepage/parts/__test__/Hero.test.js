import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "../Section";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Section />);
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });
});
