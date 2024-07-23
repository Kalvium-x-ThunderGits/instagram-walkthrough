---

## **Milestone 5 - User Login (Frontend + Backend) Integration**

### **Overview**

In Milestone 5, we have integrated the user login functionality between the frontend and backend. This milestone ensures that users can log in using their credentials, with the frontend sending data to the backend for validation.

### **Topics Covered in Milestone 5**

- **Frontend and Backend Integration**: Linked the login form on the frontend with the backend login endpoint to enable user authentication.
- **Frontend Testing**: Added Jasmine test cases to verify that the login form functions correctly.

### **Frontend Test Cases**

The following test cases have been implemented and passed:

- **REQ010_render_the_sign_in_form_with_email_and_password_fields**
  - Verifies that the sign-in form is rendered with fields for email and password.

- **REQ011_submits_form_with_all_fields_filled_and_sends_correct_data**
  - Ensures that the form is correctly submitted with all fields filled and the data sent to the backend is accurate.

### **Running Jasmine Test Cases**

To run Jasmine test cases for the frontend:

1. **Set Up Your Environment**

   Navigate to the frontend directory and install the necessary dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Test Cases**

   Use Jasmine to execute the frontend test suite:
   ```bash
   npx jasmine
   ```

   This command will run the test cases and display the results in your terminal.

3. **View Test Results**

   Jasmine will output the results of the test cases, indicating which tests passed or failed. Review these results to confirm that all test cases have been successfully executed.

### **Backend Test Cases**

Ensure that the backend server is running before executing the backend test cases:

1. **Navigate to the Backend Directory**
   ```bash
   cd backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Backend Server**
   ```bash
   node app
   ```

4. **Run the Test Cases**
   ```bash
   npx jasmine
   ```

   Jasmine will run the backend test cases and display the results.

5. **View Test Results**

   Review the test results to ensure that all backend test cases pass.

### **Running the Project**

To run the complete application:

1. **Start the Backend Server**
   ```bash
   cd backend
   node app
   ```

   The backend server will be available at `http://localhost:4000`.

2. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```

   The frontend application will be available at `http://localhost:3000`.

### **Contact**

For questions or support, please contact the development team at [support@instagram-clone.com](mailto:support@instagram-clone.com).

---
