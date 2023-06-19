import { render, screen } from '@testing-library/react';
import App from './App';


test("Sign-in User", () => {
  render(<App/>);
  const name = screen.getByText("Sign-in User");
  expect(name).toBeInTheDocument();
});

test("Please fill the below details", () => {
  render(<App/>);
  const name = screen.getByText("Please fill the below details");
  expect(name).toBeInTheDocument();
});

test("renders form firstname", () => {
  render(<App/>);
  const name = screen.getByText("First Name");
  expect(name).toBeInTheDocument();
});

test("renders form lastname", () => {
  render(<App/>);
  const name = screen.getByText("Last Name");
  expect(name).toBeInTheDocument();
});

test("renders form Role preference", () => {
  render(<App/>);
  const name = screen.getByText("Email");
  expect(name).toBeInTheDocument();
});

test("renders form Role preference", () => {
    render(<App/>);
    const name = screen.getByText("Phone Number");
    expect(name).toBeInTheDocument();
});
