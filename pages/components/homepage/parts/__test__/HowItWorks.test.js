import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: "Find your dream",
    });
    expect(heading).toBeInTheDocument();
  });
});
