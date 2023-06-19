import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './Components/Header/Header';

test("Sign-in User", () => {
  render(<App/>);
  const name = screen.getByText("Sign-in User");
  expect(name).toBeInTheDocument();
});