import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import PostDetail from '../src/components/PostDetail';
import { BrowserRouter } from 'react-router-dom';

describe('PostDetail Component Tests', function() {
  const mockItem = {
    id: 'post1',
    photo: 'https://example.com/post1.png',
    postedBy: {
      name: 'Mock User'
    },
    comments: [
      { postedBy: { name: 'Commenter1' }, text: 'Comment 1' },
      { postedBy: { name: 'Commenter2' }, text: 'Comment 2' }
    ],
    likes: [],
    body: 'Test post body'
  };

  beforeEach(function() {
    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue('mockJwtToken');

    // Mock useNavigate from react-router-dom
    spyOn(require('react-router-dom'), 'useNavigate').and.returnValue(jasmine.createSpy());

    // Mock toast notifications
    spyOn(require('react-toastify'), 'toast').and.callFake((msg) => {
      if (msg.includes('error')) {
        jasmine.createSpy('notifyErrorSpy')(msg);
      } else if (msg.includes('success')) {
        jasmine.createSpy('notifySuccessSpy')(msg);
      }
    });

    // Mock fetch API
    spyOn(window, 'fetch').and.callFake((url) => {
      if (url.includes(`/deletePost/${mockItem.id}`)) {
        return Promise.resolve({
          json: () => Promise.resolve({ message: 'Post deleted' })
        });
      }
    });
  });

  afterEach(function() {
    localStorage.getItem.calls.reset();
    window.fetch.calls.reset();
    require('react-toastify').toast.calls.reset();
  });

  it('renders post details correctly', async function(done) {
    render(
      <BrowserRouter>
        <PostDetail item={mockItem} />
      </BrowserRouter>
    );

    // Assert post details
    expect(screen.getByText(mockItem.postedBy.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockItem.comments.length} Comments`)).toBeInTheDocument();
    expect(screen.getByText(`${mockItem.body}`)).toBeInTheDocument();

    done();
  });

  it('calls delete post API on delete button click', async function(done) {
    render(
      <BrowserRouter>
        <PostDetail item={mockItem} />
      </BrowserRouter>
    );

    const deleteButton = screen.getByText('delete');
    fireEvent.click(deleteButton);

    // Wait for API call and toast notification
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalled();
      expect(window.fetch.calls.mostRecent().args[0]).toContain(`/deletePost/${mockItem.id}`);
      expect(require('react-toastify').toast).toHaveBeenCalledWith('Post deleted');
    });

    done();
  });

  // Add more test cases as needed

});

