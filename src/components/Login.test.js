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

test("button is rendered", () => {
  render(<Login />);

  const buttoEl = screen.getByRole("button");

  expect(buttoEl).toBeInTheDocument();
});

test("username input is empty", () => {
  render(<Login />);

  const userInput = screen.getByPlaceholderText(/username/i);

  expect(userInput.value).toBe("");
});

test("password input is empty", () => {
  render(<Login />);

  const userInput = screen.getByPlaceholderText(/password/i);

  expect(userInput.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);

  const buttoEl = screen.getByRole("button");

  expect(buttoEl).toBeDisabled();
});

test("Error is not visible", () => {
  render(<Login />);

  const errorMessage = screen.getByTestId("error");

  expect(errorMessage).not.toBeVisible();
});
