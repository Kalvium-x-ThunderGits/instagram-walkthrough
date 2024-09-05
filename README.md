

## **Milestone 30 - Frontend Implementing Google Login - Part 2**

### **Overview**

Milestone 30 focuses on the frontend implementation of Google Login, allowing users to complete their profile after signing in using their Google accounts. This part of the implementation covers the React components and frontend logic necessary for profile completion.

### **Topics Covered in Milestone 30**

- **Google Login Integration**: Implemented the frontend functionality to allow users to complete their profile by providing a username after authenticating via Google.
- **Frontend Testing**: Added test cases to verify the rendering and submission of the profile completion form.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ072]_renders_CompleteProfile_form_with_username_input_and_submit_button**
  - Verifies that the CompleteProfile form is rendered correctly with a username input and a submit button.

- **[REQ073]_submits_form_and_sends_correct_data**
  - Ensures that the form is submitted correctly and that the correct data is sent to the backend.

### **Running Frontend Test Cases**

To run the frontend test cases:

1. **Set Up Your Environment**

   Navigate to the frontend directory and install the necessary dependencies:
   
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite:
   
   ```bash
   npm run test
   ```

   This command will run the frontend test cases and display the results in your terminal.

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
