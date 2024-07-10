import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/App';

describe('App component tests', () => {
  it('should render the Navbar component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  it('should render the Home component by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeElement = screen.getByText(/home/i);
    expect(homeElement).toBeInTheDocument();
  });

  it('should render SignUp component on "/signup" route', () => {
    render(
      <BrowserRouter initialEntries={['/signup']}>
        <App />
      </BrowserRouter>
    );
    const signUpElement = screen.getByPlaceholderText(/email/i);
    expect(signUpElement).toBeInTheDocument();
  });

  it('should render SignIn component on "/signin" route', () => {
    render(
      <BrowserRouter initialEntries={['/signin']}>
        <App />
      </BrowserRouter>
    );
    const signInElement = screen.getByPlaceholderText(/email/i);
    expect(signInElement).toBeInTheDocument();
  });

  it('should display toast container', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const toastContainer = screen.getByTestId('toast-container');
    expect(toastContainer).toBeInTheDocument();
  });
});
