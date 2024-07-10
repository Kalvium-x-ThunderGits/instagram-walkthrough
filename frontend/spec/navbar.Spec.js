import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import { LoginContext } from '../src/context/LoginContext'; // Adjust path as necessary

describe('Navbar Component Tests', function() {
  let mockSetModalOpen;

  beforeEach(function() {
    mockSetModalOpen = jasmine.createSpy('setModalOpenSpy');
  });

  it('renders Navbar correctly for logged in user', function() {
    localStorage.setItem('jwt', 'mockJwtToken');

    render(
      <BrowserRouter>
        <LoginContext.Provider value={{ setModalOpen: mockSetModalOpen }}>
          <Navbar login={true} />
        </LoginContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText('Logo')).toBeTruthy();
    expect(screen.getByText('Profile')).toBeTruthy();
    expect(screen.getByText('Create Post')).toBeTruthy();
    expect(screen.getByText('My Following')).toBeTruthy();
    expect(screen.getByText('Log Out')).toBeTruthy();
  });

  it('renders Navbar correctly for logged out user', function() {
    localStorage.removeItem('jwt');

    render(
      <BrowserRouter>
        <LoginContext.Provider value={{ setModalOpen: mockSetModalOpen }}>
          <Navbar login={false} />
        </LoginContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText('Logo')).toBeTruthy();
    expect(screen.getByText('SignUp')).toBeTruthy();
    expect(screen.getByText('SignIn')).toBeTruthy();
  });

  it('calls setModalOpen on Log Out button click', function() {
    localStorage.setItem('jwt', 'mockJwtToken');

    render(
      <BrowserRouter>
        <LoginContext.Provider value={{ setModalOpen: mockSetModalOpen }}>
          <Navbar login={true} />
        </LoginContext.Provider>
      </BrowserRouter>
    );

    const logOutButton = screen.getByText('Log Out');
    fireEvent.click(logOutButton);

    expect(mockSetModalOpen).toHaveBeenCalledWith(true);
  });

});

