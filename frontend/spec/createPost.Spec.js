import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import { BrowserRouter } from 'react-router-dom';
import Createpost from '../src/components/Createpost';
import { toast } from 'react-toastify';

describe('Createpost Component Tests', function() {
  beforeEach(() => {
    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue('mockJwtToken');

    // Mock fetch API for Cloudinary and createPost
    spyOn(window, 'fetch').and.callFake((url) => {
      if (url.includes('cloudinary')) {
        return Promise.resolve({
          json: () => Promise.resolve({ url: 'mockImageUrl' }),
        });
      } else if (url.includes('/createPost')) {
        return Promise.resolve({
          json: () => Promise.resolve({ message: 'Successfully Posted' }),
        });
      }
    });

    // Mock toast notifications
    spyOn(toast, 'error');
    spyOn(toast, 'success');
  });

  afterEach(() => {
    // Clear mocks
    localStorage.getItem.calls.reset();
    window.fetch.calls.reset();
    toast.error.calls.reset();
    toast.success.calls.reset();
  });

  it('should initialize component with correct initial state', function() {
    render(
      <BrowserRouter>
        <Createpost />
      </BrowserRouter>
    );

    const bodyInput = screen.getByPlaceholderText('Write a caption....');
    expect(bodyInput.value).toBe('');
  });

  it('should handle image selection and preview', function() {
    render(
      <BrowserRouter>
        <Createpost />
      </BrowserRouter>
    );

    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    const imageInput = screen.getByLabelText('Upload Image');
    fireEvent.change(imageInput, { target: { files: [file] } });

    const outputImage = document.getElementById('output');
    expect(outputImage.src).toContain('blob:');
  });

  it('should submit post details and notify success', async () => {
    render(
      <BrowserRouter>
        <Createpost />
      </BrowserRouter>
    );

    const bodyInput = screen.getByPlaceholderText('Write a caption....');
    fireEvent.change(bodyInput, { target: { value: 'Test caption' } });

    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    const imageInput = screen.getByLabelText('Upload Image');
    fireEvent.change(imageInput, { target: { files: [file] } });

    const submitButton = screen.getByText('Share');
    fireEvent.click(submitButton);

    // Wait for the useEffect to set the URL and trigger the next fetch call
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Successfully Posted');
    });
  });

  it('should handle error notification on failed post', async () => {
    // Mock fetch API to return an error for the createPost request
    spyOn(window, 'fetch').and.callFake((url) => {
      if (url.includes('cloudinary')) {
        return Promise.resolve({
          json: () => Promise.resolve({ url: 'mockImageUrl' }),
        });
      } else if (url.includes('/createPost')) {
        return Promise.resolve({
          json: () => Promise.resolve({ error: 'Post failed' }),
        });
      }
    });

    render(
      <BrowserRouter>
        <Createpost />
      </BrowserRouter>
    );

    const bodyInput = screen.getByPlaceholderText('Write a caption....');
    fireEvent.change(bodyInput, { target: { value: 'Test caption' } });

    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    const imageInput = screen.getByLabelText('Upload Image');
    fireEvent.change(imageInput, { target: { files: [file] } });

    const submitButton = screen.getByText('Share');
    fireEvent.click(submitButton);

    // Wait for the useEffect to set the URL and trigger the next fetch call
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Post failed');
    });
  });

  it('should clear input fields after successful post', async () => {
    render(
      <BrowserRouter>
        <Createpost />
      </BrowserRouter>
    );

    const bodyInput = screen.getByPlaceholderText('Write a caption....');
    fireEvent.change(bodyInput, { target: { value: 'Test caption' } });

    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    const imageInput = screen.getByLabelText('Upload Image');
    fireEvent.change(imageInput, { target: { files: [file] } });

    const submitButton = screen.getByText('Share');
    fireEvent.click(submitButton);

    // Wait for the useEffect to set the URL and trigger the next fetch call
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Successfully Posted');
    });

    expect(bodyInput.value).toBe('');
    expect(imageInput.value).toBe('');
  });





  
});
