import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

test("Sign-in User", () => {
  render(<Header/>);
  const name = screen.getByText("Sign-in User");
  expect(name).toBeInTheDocument();
});

test("Please fill the below details", () => {
  render(<Header/>);
  const name = screen.getByText("Please fill the below details");
  expect(name).toBeInTheDocument();
});