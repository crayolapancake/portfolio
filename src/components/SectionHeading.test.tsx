import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SectionHeading from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders the eyebrow and title text", () => {
    render(<SectionHeading eyebrow="About me" title="About" />);

    expect(screen.getByText("About me")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });
});
