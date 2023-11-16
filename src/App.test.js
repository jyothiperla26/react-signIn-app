import { render, screen } from '@testing-library/react';
import App from './App';

test("Should render the text 'Sign-in User' ", () => {
  render(<App/>);
  const name = screen.getByText("Sign-in User");
  expect(name).toBeInTheDocument();
});

test("Should render the text 'Please fill the below details' ", () => {
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

test("renders form email", () => {
  render(<App/>);
  const name = screen.getByText("Email");
  expect(name).toBeInTheDocument();
});

test("renders form phone number", () => {
    render(<App/>);
    const name = screen.getByText("Phone Number");
    expect(name).toBeInTheDocument();
});

test("renders form cancel button", () => {
  render(<App/>);
  const name = screen.getByText("Cancel");
  expect(name).toBeInTheDocument();
});
test("renders form Create User button", () => {
  render(<App/>);
  const name = screen.getByText("Create User");
  expect(name).toBeInTheDocument();
});