import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the hero, about, experience, and contact sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("img", { name: /avatar of jemma johnston/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Jemma Johnston" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Career history" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Contact" }),
    ).toBeInTheDocument();
  });
});
