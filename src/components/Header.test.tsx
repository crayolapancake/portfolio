import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders the site name and nav links", () => {
    render(<Header />);

    expect(screen.getByText("Jemma Johnston")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute(
      "href",
      "#about",
    );
    expect(
      screen.getAllByRole("link", { name: "Experience" })[0],
    ).toHaveAttribute("href", "#experience");
    expect(
      screen.getAllByRole("link", { name: "Get in touch" })[0],
    ).toHaveAttribute("href", "#contact");
  });

  it("opens and closes the mobile menu when the toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "" })).toBeTruthy();
    expect(document.getElementById("mobile-nav")).not.toBeInTheDocument();

    await user.click(toggle);

    expect(
      screen.getByRole("button", { name: "Close menu" }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-nav")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close menu" }));

    expect(document.getElementById("mobile-nav")).not.toBeInTheDocument();
  });

  it("closes the mobile menu after a nav link is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileNav = document.getElementById("mobile-nav");
    expect(mobileNav).toBeInTheDocument();

    const mobileAboutLink = screen.getAllByRole("link", { name: "About" })[1];
    await user.click(mobileAboutLink);

    expect(document.getElementById("mobile-nav")).not.toBeInTheDocument();
  });

  it("closes the mobile menu after the mobile CTA is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileCta = screen.getAllByRole("link", { name: "Get in touch" })[1];
    await user.click(mobileCta);

    expect(document.getElementById("mobile-nav")).not.toBeInTheDocument();
  });
});
