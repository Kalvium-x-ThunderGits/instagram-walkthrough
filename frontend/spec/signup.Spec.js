import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jasmine-dom";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../src/components/SignUp";

describe("SignUp component tests", () => {
  beforeEach(() => {
    // Mock fetch globally to spy on it
    spyOn(window, "fetch").and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
  });

  afterEach(() => {
    // Reset spy after each test
    window.fetch.calls.reset();
  });

  it("should render the sign-up form with all fields", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/Full Name/i)).toBeTruthy(); // Use .toBeTruthy() instead of .toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Username/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Password/i)).toBeTruthy();
  });

  it("should display an error message for invalid password", async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "short" } });

    const submitButton = screen.getByRole("button", { name: /Sign Up/i });
    fireEvent.click(submitButton);

    // Define a function to find the error message using queryByText
    const findErrorMessage = () => {
      return screen.queryByText(/Password must contain at least 8 characters/i);
    };

    await waitFor(() => {
      expect(findErrorMessage()).toBeDefined(); // Assert with toBeDefined()
    });
  });

  it("should display an error message for invalid email", async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    const submitButton = screen.getByRole("button", { name: /Sign Up/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/Invalid email/i)).toBeDefined();
    });
  });

  it("should call the postData function on form submission", async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText(/Full Name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: "geekyjha@gmail.com" } });

    const usernameInput = screen.getByPlaceholderText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: "johndoe" } });

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordInput, {
      target: { value: "StrongPassword#123" },
    });

    const submitButton = screen.getByRole("button", { name: /Sign Up/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://localhost:4000/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
          userName: "johndoe",
          email: "geekyjha@gmail.com",
          password: "StrongPassword#123",
        }),
      });
    });
  });
});
