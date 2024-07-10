import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jasmine-dom';
import Profile from '../src/components/Profie';

// describe('Profile Component Tests', function() {

//   beforeEach(function() {
//     // Mock localStorage
//     localStorage.setItem('jwt', 'mockJwtToken');
//     localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Test User' }));

//     // Mock fetch API
//     spyOn(global, 'fetch').and.callFake(() =>
//       Promise.resolve({
//         json: () =>
//           Promise.resolve({
//             posts: [
//               { id: 1, photo: 'https://example.com/photo1.png' },
//               { id: 2, photo: 'https://example.com/photo2.png' }
//             ],
//             user: {
//               id: 1,
//               name: 'Test User',
//               followers: [],
//               following: []
//             }
//           })
//       })
//     );
//   });

//   afterEach(function() {
//     localStorage.clear();
//     global.fetch.calls.reset();
//   });

//   it('renders profile information correctly', function(done) {
//     render(<Profile />);

//     waitFor(() => {
//       const userNameElement = screen.getByText('Test User');
//       const postsElement = screen.getByText('2 posts'); // Assuming 2 mocked posts
//       const followersElement = screen.getByText('0 followers');
//       const followingElement = screen.getByText('0 following');
//       const profilePics = screen.getAllByRole('img');

//       expect(userNameElement).not.toBeNull();
//       expect(postsElement).not.toBeNull();
//       expect(followersElement).not.toBeNull();
//       expect(followingElement).not.toBeNull();
//       expect(profilePics.length).toBe(2); // Assuming 2 mocked photos
//       done();
//     });
//   });

//   it('displays detailed post on image click', function(done) {
//     render(<Profile />);

//     waitFor(() => {
//       const image = screen.getAllByRole('img')[0];
//       fireEvent.click(image);

//       const postDetailElement = screen.getByText('Post Detail'); // Assuming PostDetail component renders 'Post Detail' text
//       expect(postDetailElement).not.toBeNull();
//       done();
//     });
//   });

//   it('changes profile picture on click', function(done) {
//     render(<Profile />);

//     waitFor(() => {
//       const profilePic = screen.getByRole('img');
//       fireEvent.click(profilePic);

//       const selectNewProfilePictureElement = screen.getByText('Select New Profile Picture'); // Assuming ProfilePic component renders 'Select New Profile Picture' text
//       expect(selectNewProfilePictureElement).not.toBeNull();
//       done();
//     });
//   });

// });


describe('Profile Component Tests', function() {


  beforeEach(function() {
    // Mock localStorage
    localStorage.setItem('jwt', 'mockJwtToken');
    localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Test User' }));

    // Mock fetch API
    spyOn(global, 'fetch').and.callFake(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            posts: [
              { id: 1, photo: 'https://example.com/photo1.png', postedBy: { name: 'Test User' } },
              { id: 2, photo: 'https://example.com/photo2.png', postedBy: { name: 'Test User' } }
            ],
            user: {
              id: 1,
              name: 'Test User',
              followers: [],
              following: []
            }
          })
      })
    );
  });

  afterEach(function() {
    localStorage.clear();
    global.fetch.calls.reset();
  });

  it('renders profile information correctly', async function() {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    await waitFor(() => {
      const userNameElement = screen.getByText('Test User');
      const postsElement = screen.getByText('2 posts'); // Assuming 2 mocked posts
      const followersElement = screen.getByText('0 followers');
      const followingElement = screen.getByText('0 following');
      const profilePics = screen.getAllByRole('img');

      expect(userNameElement).not.toBeNull();
      expect(postsElement).not.toBeNull();
      expect(followersElement).not.toBeNull();
      expect(followingElement).not.toBeNull();
      expect(profilePics.length).toBe(2); // Assuming 2 mocked photos
    });
  });

  // it('displays detailed post on image click', async function() {
  //   render(
  //     <MemoryRouter>
  //       <Profile />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     const images = screen.getAllByRole('img');
  //     fireEvent.click(images[1]); // Click on the first post image
  //   });

  //   await waitFor(() => {
  //     const postDetailElement = screen.getByText('Post Detail'); // Assuming PostDetail component renders 'Post Detail' text
  //     expect(postDetailElement).toBeInTheDocument();
  //   });
  // });

  // it('changes profile picture on click', async function() {
  //   render(
  //     <MemoryRouter>
  //       <Profile />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     const profilePics = screen.getAllByRole('img');
  //     fireEvent.click(profilePics[0]);
  //   });

  //   await waitFor(() => {
  //     const selectNewProfilePictureElement = screen.getByText('Select New Profile Picture'); // Assuming ProfilePic component renders 'Select New Profile Picture' text
  //     expect(selectNewProfilePictureElement).not.toBeNull();
  //   });
  // });

});
