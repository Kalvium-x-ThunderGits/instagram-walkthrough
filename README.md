## **Milestone 11 - Backend API for Creating Post**

### **Overview**

Milestone 11 focuses on implementing the backend API for creating new posts. This API allows users to submit posts with required data, handling various scenarios such as missing fields and invalid tokens.

### **Topics Covered in Milestone 11**

- **Backend API for Creating Post**: Developed the API endpoint to handle the creation of new posts, including validation of required fields and token authentication.
- **Backend Testing**: Added test cases to ensure the correct functionality of the post creation API.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ023_create_new_post_successfully**
  - Verifies that a new post is created successfully when valid data is provided.

- **REQ024_not_create_post_with_missing_required_fields**
  - Ensures that a post is not created if required fields are missing in the request.

- **REQ025_not_create_post_with_invalid_token**
  - Confirms that a post is not created if the provided token is invalid.

### **Running Backend Test Cases**

To run backend test cases for the post creation API:

1. **Set Up Your Environment**

   Navigate to the backend directory and install the necessary dependencies:
   ```bash
   cd backend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite (assuming you are using a testing framework like Mocha or Jest):
   ```bash
   npm test
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
