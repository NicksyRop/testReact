import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input is rendered", () => {
  render(<Login />);

  const userInput = screen.getByPlaceholderText(/username/i);

  expect(userInput).toBeInTheDocument();
});

test("password input is rendered", () => {
  render(<Login />);

  const passwordInput = screen.getByPlaceholderText(/password/i);

  expect(passwordInput).toBeInTheDocument();
});

test("button input is rendered", () => {
  render(<Login />);

  const buttoEl = screen.getRole("button");

  expect(buttoEl).toBeInTheDocument();
});
