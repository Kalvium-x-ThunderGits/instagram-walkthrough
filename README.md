
## **Milestone 10 - Implementing Authorization Middleware**

### **Overview**

Milestone 10 focuses on implementing authorization middleware for the backend of the application. This middleware ensures that only authenticated users can access protected routes by validating the authorization token provided in requests.

### **Topics Covered in Milestone 10**

- **Authorization Middleware**: Developed middleware to handle authentication by validating authorization tokens and managing access control.
- **Backend Testing**: Added test cases to verify the correct functionality of the authorization middleware.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ020_should_return_401_if_no_authorization_header**
  - Verifies that the server returns a 401 Unauthorized status code if the request does not include an authorization header.

- **REQ021_should_return_401_if_invalid_token**
  - Ensures that the server returns a 401 Unauthorized status code if the provided token is invalid.

- **REQ022_should_call_next_if_token_is_valid_and_user_exists**
  - Confirms that the middleware correctly calls `next()` if the token is valid and the user exists in the system.

### **Running Backend Test Cases**

To run backend test cases for the authorization middleware:

1. **Set Up Your Environment**

   Navigate to the backend directory and install the necessary dependencies:
   ```bash
   cd backend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite (assuming you are using a testing framework like Mocha or Jest):
   ```bash
   npx jasmine 
   ```

   This command will run the backend test cases and provide the results in your terminal.

3. **View Test Results**

   The test suite will output the results of the test cases, indicating which tests passed or failed. Review these results to ensure that all test cases pass successfully.

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

---
