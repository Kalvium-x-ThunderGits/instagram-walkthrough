## **Milestone 19 - Comment on Post (Backend API)**

### **Overview**

Milestone 18 focuses on implementing the backend API for adding comments to posts and fetching comments for a given post. This functionality enables users to engage in discussions by commenting on posts. The implementation includes secure authentication and error handling.

### **Topics Covered in Milestone 18**

- **Comment Functionality**: Developed API endpoints for adding comments to posts and fetching existing comments.
- **Authentication Handling**: Implemented authentication checks to ensure that only authorized users can add comments.
- **Error Handling**: Added error handling for scenarios such as invalid tokens or attempts to fetch comments for non-existent posts.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ043_add_comment_successfully**
  - Verifies that a comment can be added to a post successfully by an authenticated user.

- **REQ044_add_comment_with_invalid_token**
  - Ensures that the API returns an error when an attempt to add a comment is made with an invalid token.

- **REQ045_fetch_comments_successfully**
  - Confirms that comments can be fetched successfully for a valid post ID.

- **REQ046_fetch_comments_for_invalid_postId**
  - Checks that the API returns an error when attempting to fetch comments for an invalid or non-existent post ID.

### **Running Backend Test Cases**

To run test cases for the backend:

1. **Set Up Your Environment**

   Navigate to the backend directory and install the necessary dependencies:
   ```bash
   cd backend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite:
   ```bash
   npm run test
   ```

   This command will run the test cases and provide the results in your terminal.

3. **View Test Results**

   The testing framework will output the results of the test cases, indicating which tests passed or failed. Review these results to ensure that all test cases pass successfully.

### **Running the Project**

To run the complete application:

1. **Start the Backend Server**

   Navigate to the backend directory and start the server:
   ```bash
   cd backend
   node app
   ```

   The backend server will be available at `http://localhost:4000`.

2. **Start the Frontend Application**

   Navigate to the frontend directory and start the React application:
   ```bash
   cd frontend
   npm start
   ```

   The frontend application will be available at `http://localhost:3000`.
