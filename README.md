---

# Instagram Clone - Milestone 3

## Overview

In Milestone 3, we integrated the frontend and backend to complete the user registration functionality. The frontend, developed with ReactJS and styled using Tailwind CSS, communicates with the backend APIs to handle user registration. Jasmine is used for testing both frontend and backend functionalities.

## Topics Covered in Milestone 3

- **Frontend and Backend Integration**: Connected the frontend registration form with the backend API to enable complete user registration.
- **Frontend Testing**: Added Jasmine test cases to verify the registration functionality from the user’s perspective.

## Frontend Test Cases

The following test cases were implemented and have passed:

- **REQ002_register_new_user_and_displays_success_message**
  - Verifies that a new user registration is successful and displays the appropriate success message on the frontend.

- **REQ006_submits_form_with_all_fields_filled_and_sends_correct_data**
  - Ensures that the registration form is correctly submitted with all fields filled and that the data sent to the backend is accurate.

## Running Jasmine Test Cases

### Frontend Test Cases

To run Jasmine test cases for the frontend, follow these steps:

1. **Set Up Your Environment**

   Ensure you have all necessary dependencies installed for both frontend and backend. Navigate to the project directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Test Cases**

   Use Jasmine to run the frontend test suite. Ensure the backend server is running if needed for integration tests:
   ```bash
   npx jasmine
   ```

   This command will execute the Jasmine test cases and display the results in your terminal.

3. **View Test Results**

   Jasmine will output the results of the test cases, including which tests passed or failed. Review these results to ensure that all test cases have passed and to identify any issues.

### Backend Test Cases

To run Jasmine test cases for the backend, follow these steps:

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Test Cases:**
   ```bash
   npx jasmine
   ```

   This command will execute the Jasmine test cases for the backend and display the results in your terminal.

4. **View Test Results**

   Jasmine will output the results of the test cases, including which tests passed or failed. Review these results to ensure that all test cases have passed and to identify any issues.

## Running the Project

To run the full application:

1. **Start the Backend Server**

   Navigate to the backend directory and start the server:
   ```bash
   cd backend
   npm start
   ```

   The server will start on `http://localhost:4000` by default.

2. **Start the Frontend Application**

   Navigate to the frontend directory and start the React application:
   ```bash
   cd frontend
   npm start
   ```

   The frontend application will be available on `http://localhost:3000` by default.

## Conclusion

Milestone 3 successfully integrates the frontend and backend to enable complete user registration functionality. The registration form on the frontend now interacts seamlessly with the backend API, and both frontend and backend functionalities have been tested thoroughly.
