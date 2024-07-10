import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home';

describe('Home Component Tests', () => {
  beforeEach(() => {
    // Mock localStorage and fetch globally to spy on them
    spyOn(localStorage, 'getItem').and.returnValue('mockJwtToken');
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve([]), // Mock empty response by default
      })
    );
  });

  afterEach(() => {
    // Reset spies after each test
    localStorage.getItem.calls.reset();
    window.fetch.calls.reset();
  });

  it('should redirect to signup page if jwt token is not present', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null); // Simulate no token
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(window.location.pathname).toEqual('/signup');
  });

  it('should render posts with correct data after fetching', async () => {
    const mockPosts = [
      {
        id: 1,
        postedBy: {
          id: 1,
          name: 'Test User',
          Photo: 'https://example.com/avatar.jpg',
        },
        photo: 'https://example.com/post.jpg',
        body: 'Test post body',
        likes: [{ userId: 1 }],
        comments: [{ id: 1, text: 'Test comment', postedBy: { name: 'Commenter' } }],
      },
    ];

    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      })
    );

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Wait for data fetching and rendering
    await waitFor(() => {
      // Assert post content
      expect(screen.getByText('Test post body')).toBeInTheDocument();
      expect(screen.getByText('Test User')).toBeInTheDocument();
      expect(screen.getByText('1 Likes')).toBeInTheDocument();
      expect(screen.getByText('View all comments')).toBeInTheDocument();
    });
  });

  it('should toggle comments visibility correctly', async () => {
    const mockPost = {
      id: 1,
      postedBy: { id: 1, name: 'Test User', Photo: 'https://example.com/avatar.jpg' },
      comments: [{ id: 1, text: 'Test comment', postedBy: { name: 'Commenter' } }],
    };

    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve([mockPost]),
      })
    );

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Click to toggle comments
    fireEvent.click(screen.getByText('View all comments'));

    // Assert that comment section is shown
    await waitFor(() => {
      expect(screen.getByText('Test comment')).toBeInTheDocument();
      expect(screen.getByText('Commenter')).toBeInTheDocument();
    });
  });

  it('should like a post when clicked', async () => {
    const mockPost = {
      id: 1,
      likes: [],
    };

    spyOn(window, 'fetch').and.returnValues(
      Promise.resolve({ json: () => Promise.resolve({ ...mockPost, likes: [{ userId: 1 }] }) }),
      Promise.resolve({ json: () => Promise.resolve({ ...mockPost, likes: [] }) })
    );

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Click like button
    fireEvent.click(screen.getByText('favorite'));

    // Assert like count and button class change
    await waitFor(() => {
      expect(screen.getByText('1 Likes')).toBeInTheDocument();
      expect(screen.getByText('favorite')).toHaveClass('material-symbols-outlined-red');
    });

    // Click again to unlike
    fireEvent.click(screen.getByText('favorite'));

    // Assert like count and button class change back
    await waitFor(() => {
      expect(screen.getByText('0 Likes')).toBeInTheDocument();
      expect(screen.getByText('favorite')).not.toHaveClass('material-symbols-outlined-red');
    });
  });

  it('should make a comment on a post', async () => {
    const mockPost = { id: 1 };

    spyOn(window, 'fetch').and.returnValues(
      Promise.resolve({ json: () => Promise.resolve([mockPost]) }),
      Promise.resolve({ json: () => Promise.resolve({ comments: [{ text: 'New comment' }] }) })
    );

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Type comment text and click Post
    fireEvent.change(screen.getByPlaceholderText('Add a comment'), { target: { value: 'New comment' } });
    fireEvent.click(screen.getByText('Post'));

    // Assert comment posted
    await waitFor(() => {
      expect(screen.getByText('Comment posted')).toBeInTheDocument();
      expect(screen.getByText('New comment')).toBeInTheDocument();
    });
  });
});
