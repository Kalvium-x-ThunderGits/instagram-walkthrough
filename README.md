## **Milestone 27 - Backend API for My Following Posts**

### **Overview**

Milestone 28 introduces a backend API to fetch posts from users that the current user is following. This feature allows users to see content only from accounts they follow, enhancing the personalized experience of the application.

### **Topics Covered in Milestone 28**

- **Backend API for Following Posts**: Implemented an API endpoint to fetch posts from users that the current user is following.
- **Backend Testing**: Added test cases to verify the functionality and ensure that the API works as expected.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ066]_fetch_following_posts_successfully**
  - Verifies that the API successfully retrieves posts from users that the current user is following.

- **[REQ067]_fetch_no_posts_when_not_following**
  - Ensures that the API returns no posts when the current user is not following anyone.

### **Running Backend Test Cases**

To run the backend test cases:

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

   This command will run the backend test cases and display the results in your terminal.

3. **View Test Results**

   The test results will indicate which test cases passed or failed. Review these results to ensure that all test cases are successful.

### **Running the Project**

To run the complete application:

1. **Start the Backend Server**

   Navigate to the backend directory and start the server:
   
   ```bash
   cd backend
   node app
   ```

   The backend server will be available at http://localhost:4000.

2. **Start the Frontend Application**

   Navigate to the frontend directory and start the React application:
   
   ```bash
   cd frontend
   npm start
   ```

   The frontend application will be available at http://localhost:3000.
