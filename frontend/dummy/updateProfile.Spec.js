import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import UserProfile from '../src/components/UserProfile';
import { BrowserRouter } from 'react-router-dom';

describe('UserProfile Component Tests', function() {

  beforeEach(function() {
    // Mock localStorage
    localStorage.setItem('jwt', 'mockJwtToken');
    localStorage.setItem('user', JSON.stringify({ _id: 1, name: 'Test User' }));

    // Mock useParams
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        userid: 'mockUserId'
      })
    }));

    // Mock fetch API
    jest.spyOn(global, 'fetch').mockImplementation((url) => {
      if (url.includes('/user/mockUserId')) {
        return Promise.resolve({
          json: () => Promise.resolve({
            user: {
              _id: 'mockUserId',
              name: 'Mock User',
              Photo: 'https://example.com/mockphoto.png',
              followers: [],
              following: []
            },
            posts: [
              { _id: 'post1', photo: 'https://example.com/post1.png' },
              { _id: 'post2', photo: 'https://example.com/post2.png' }
            ]
          })
        });
      } else if (url.includes('/follow')) {
        return Promise.resolve({
          json: () => Promise.resolve({ message: 'User followed' })
        });
      } else if (url.includes('/unfollow')) {
        return Promise.resolve({
          json: () => Promise.resolve({ message: 'User unfollowed' })
        });
      }
    });
  });

  afterEach(function() {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('renders user profile information correctly', async function() {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Mock User')).toBeInTheDocument();
      expect(screen.getByText('2 posts')).toBeInTheDocument(); // Assuming 2 mocked posts
      expect(screen.getByText('0 followers')).toBeInTheDocument();
      expect(screen.getByText('0 following')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Follow' })).toBeInTheDocument();
    });
  });

  it('displays "Unfollow" after clicking "Follow" button', async function() {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      const followButton = screen.getByRole('button', { name: 'Follow' });
      fireEvent.click(followButton);

      expect(screen.getByRole('button', { name: 'Unfollow' })).toBeInTheDocument();
    });
  });

  it('displays "Follow" after clicking "Unfollow" button', async function() {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      const followButton = screen.getByRole('button', { name: 'Follow' });
      fireEvent.click(followButton);

      const unfollowButton = screen.getByRole('button', { name: 'Unfollow' });
      fireEvent.click(unfollowButton);

      expect(screen.getByRole('button', { name: 'Follow' })).toBeInTheDocument();
    });
  });

  // Add more test cases as needed

});

