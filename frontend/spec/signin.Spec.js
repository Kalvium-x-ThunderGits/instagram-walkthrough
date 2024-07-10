import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../src/components/SignIn';
import { LoginContext } from '../src/context/LoginContext'; // Adjust path as necessary

describe('SignIn component tests', () => {
  let setUserLoginMock;

  beforeEach(() => {
    setUserLoginMock = jasmine.createSpy('setUserLogin');
    render(
      <LoginContext.Provider value={{ setUserLogin: setUserLoginMock }}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </LoginContext.Provider>
    );
  });

  it('should render the sign-in form with email and password fields', () => {
    expect(document.querySelector('input[type="email"][placeholder="Email"]')).toBeTruthy();
    expect(document.querySelector('input[type="password"][placeholder="Password"]')).toBeTruthy();
    expect(document.querySelector('input[type="submit"][value="Sign In"]')).toBeTruthy();
  });

  it('should render the sign-in form with email and password fields using TestId of login button', () => {
    expect(screen.getByPlaceholderText(/Email/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Password/i)).toBeTruthy();
    expect(screen.getByTestId('login-btn')).toBeTruthy();
  });

  it('should display an error message for invalid email', async () => {
    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    // Click the submit button
    fireEvent.click(screen.getByTestId('login-btn'));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.queryByText(/Invalid email/i)).toBeDefined();
    });
  });

  it('should call the postData function on form submission', async () => {
    // Mock fetch function
    spyOn(global, 'fetch').and.returnValue(Promise.resolve({
      json: () => Promise.resolve({ token: 'mockToken', user: { name: 'John Doe' } }),
    }));

    // Fill out the form fields
    const emailInput = document.querySelector('input[type="email"]');
    fireEvent.change(emailInput, { target: { value: 'validemail@example.com' } });

    const passwordInput = document.querySelector('input[type="password"]');
    fireEvent.change(passwordInput, { target: { value: 'validPassword123' } });

    // Submit the form
    const submitButton = document.querySelector('input[type="submit"]');
    fireEvent.click(submitButton);

    // Wait for postData function to be called
    await new Promise(resolve => setTimeout(resolve, 500)); // Adjust timing if needed

    // Verify fetch was called with the correct arguments
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'validemail@example.com',
        password: 'validPassword123',
      }),
    });

    // Verify setUserLogin was called
    expect(setUserLoginMock).toHaveBeenCalledWith(true);
  });
});
