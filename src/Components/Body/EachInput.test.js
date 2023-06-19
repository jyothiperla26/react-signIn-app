import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EachInput from "./EachInput";

test("renders form firstname", () => {
  render(<EachInput />);
  const name = screen.getByText("First Name");
  expect(name).toBeInTheDocument();
});

test("renders form lastname", () => {
  render(<EachInput />);
  const name = screen.getByText("Last Name");
  expect(name).toBeInTheDocument();
});

test("renders form Role preference", () => {
  render(<EachInput />);
  const name = screen.getByText("Email");
  expect(name).toBeInTheDocument();
});

test("renders form Role preference", () => {
    render(<EachInput />);
    const name = screen.getByText("Phone Number");
    expect(name).toBeInTheDocument();
});


// test("Should reverse role preferences", () => {
//   const { getByRole } = render(<App />);
//   const name = getByRole("checkbox");
//   expect(name).toBeInTheDocument();
//   fireEvent.click(name);
// });