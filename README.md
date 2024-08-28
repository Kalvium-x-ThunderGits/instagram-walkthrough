## **Milestone 29 - Implementing Google Login - Part 1**

### **Overview**

Milestone 29 focuses on the initial implementation of Google Login, allowing users to sign in using their Google accounts. This part of the implementation covers the backend processes, including user authentication and profile completion.

### **Topics Covered in Milestone 29**

- **Google Login Integration**: Implemented the backend functionality to authenticate users via Google and handle the necessary profile completion steps.
- **Backend Testing**: Added test cases to verify the successful completion of profiles and to handle scenarios where a username is already taken.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ070]_complete_profile_success**
  - Verifies that a user's profile is successfully completed after Google authentication.

- **[REQ071]_complete_profile_username_taken**
  - Ensures that the system correctly handles situations where the chosen username is already taken during profile completion.

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
