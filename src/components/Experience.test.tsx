import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experience from "./Experience";

describe("Experience", () => {
  it("renders the career history heading and every role", () => {
    render(<Experience />);

    expect(
      screen.getByRole("heading", { name: "Career history" }),
    ).toBeInTheDocument();

    [
      "The Keyholding Company",
      "Fixzy",
      "Token.com",
      "Spotlight Sports Group",
      "SwarmOnline",
      "Voxsio",
    ].forEach(company => {
      expect(screen.getByText(new RegExp(company))).toBeInTheDocument();
    });
  });

  it("renders a highlight bullet for the most recent role", () => {
    render(<Experience />);

    expect(
      screen.getByText(
        "Led a React Native / Expo app for on-site risk assessments end-to-end",
      ),
    ).toBeInTheDocument();
  });
});
