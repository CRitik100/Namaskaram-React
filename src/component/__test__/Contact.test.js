import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("This is contact us page Tc's", () => {
  test("verify contact component is rendering", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("verify two Headings are present in the Contact component.", () => {
    render(<Contact />);
    const headings = screen.getAllByRole("heading");
    console.log(headings);
    expect(headings.length).toBe(2);
  });
});
