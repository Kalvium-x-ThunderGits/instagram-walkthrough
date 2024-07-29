---

# Instagram Clone - Milestone 4

## Overview

Milestone 4 focuses on enhancing user security by implementing password validation on the frontend using regular expressions. Additionally, we have developed a new backend endpoint for user login. Jasmine test cases have been created to ensure the functionality and reliability of these new features.

## Topics Covered in Milestone 4

- **Frontend Password Validation**: Added regular expression validation for passwords to ensure security requirements are met before submission.
- **Backend User Login Endpoint**: Developed and tested an endpoint to handle user login functionality.
- **Testing**: Implemented Jasmine test cases for both frontend and backend to verify proper functionality.

## Frontend Test Cases

The following frontend test case has been implemented:

- **REQ007_display_an_error_message_for_invalid_password**
  - Verifies that an error message is displayed when the user enters a password that does not meet the required validation criteria.

## Backend Test Cases

The following backend test cases have been implemented:

- **REQ009_login_successfully_with_correct_credentials**
  - Ensures that a user can successfully log in with valid credentials.

- **REQ007_fail_login_with_incorrect_password**
  - Verifies that login fails when the password provided is incorrect.

- **REQ008_fail_login_with_non_existent_email**
  - Ensures that login fails when the email provided does not exist in the system.

## Running Jasmine Test Cases

### Frontend Test Cases

To run Jasmine test cases for the frontend:

1. **Set Up Your Environment**

   Navigate to the frontend directory and ensure all dependencies are installed:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Test Cases**

   Execute the Jasmine test suite for the frontend:
   ```bash
   npx jasmine
   ```

   This will run the Jasmine test cases and show the results in your terminal.

3. **View Test Results**

   Jasmine will display the results of the test cases, indicating which tests passed or failed. Review the results to confirm that all test cases have passed.

### Backend Test Cases

To run Jasmine test cases for the backend:

1. **Navigate to the Backend Directory**
   ```bash
   cd backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Backend Server**
   Ensure the backend server is running by executing:
   ```bash
   node app
   ```

4. **Run the Test Cases**
   Execute the Jasmine test suite for the backend:
   ```bash
   npx jasmine
   ```

   This command will run the backend tests and display the results.

5. **View Test Results**

   Jasmine will output the results of the test cases, including which tests passed or failed. Review these results to ensure that all test cases have been successfully executed.

## Running the Project

To run the complete application:

1. **Start the Backend Server**

   Navigate to the backend directory and start the server:
   ```bash
   cd backend
   node app
   ```

   The backend server will start on `http://localhost:4000`.

2. **Start the Frontend Application**

   Navigate to the frontend directory and start the React application:
   ```bash
   cd frontend
   npm start
   ```

   The frontend application will be available on `http://localhost:3000`.

## Conclusion

Milestone 4 successfully integrates password validation on the frontend and adds a login endpoint to the backend. The implemented Jasmine test cases ensure that both new features work as expected and handle various scenarios appropriately.

