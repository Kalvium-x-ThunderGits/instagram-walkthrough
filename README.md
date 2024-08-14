
## **Milestone 17 - Like and Unlike API**

### **Overview**

Milestone 17 focuses on developing the Like and Unlike API endpoints. These endpoints enable users to like or unlike posts, enhancing user engagement within the application. Proper authentication and error handling are incorporated to ensure security and reliability.

### **Topics Covered in Milestone 17**

- **Like and Unlike Functionality**: Developed API endpoints to allow users to like and unlike posts.
- **Authentication Handling**: Implemented authentication checks to ensure that only authorized users can like or unlike posts.
- **Error Handling**: Added error handling for scenarios such as invalid tokens or attempts to like or unlike non-existent posts.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ037_like_post_successfully**
  - Verifies that a post can be liked successfully by an authenticated user.

- **REQ038_like_post_with_invalid_token**
  - Ensures that the API returns an error when a like attempt is made with an invalid token.

- **REQ039_unlike_post_successfully**
  - Checks that a post can be unliked successfully by an authenticated user.

- **REQ040_unlike_post_with_invalid_token**
  - Confirms that the API returns an error when an unlike attempt is made with an invalid token.

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

