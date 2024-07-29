

# Instagram Clone - Milestone 2

## Overview

In Milestone 2, we focused on developing and testing the backend APIs for user registration. The backend is built with ExpressJS and NodeJS, utilizing SQLite as the database. Jasmine is used for unit testing the backend, and the frontend is developed using ReactJS with Tailwind CSS for styling.

## Topics Covered in Milestone 2

- **Backend API Development**: Created RESTful APIs for user registration.
- **Database Integration**: Configured SQLite database for user data storage.
- **Testing**: Implemented Jasmine test cases to validate registration functionality.

## Backend APIs

The following APIs were developed in this milestone:

1. **POST /api/users/register**
   - Registers a new user.
   - **Request Body**:
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string",
       "fullname": "string"
     }
     ```
   - **Responses**:
     - **Success**: `201 Created`
     - **Failure**: `422 Unprocessable Entity`

## Jasmine Test Cases

The following test cases were implemented and have passed:

- **REQ003_register_new_user_successfully**
  - Verifies that a new user can be registered successfully with valid details.

- **REQ004_not_register_a_user_with_an_existing_email**
  - Ensures that a user cannot be registered if the email is already in use.

- **REQ005_not_register_a_user_with_an_existing_username**
  - Ensures that a user cannot be registered if the username is already in use.

## Running Jasmine Test Cases

To run Jasmine test cases for the backend, follow these steps:

### 1. Set Up Your Environment

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   Make sure you have all necessary dependencies installed.
   ```bash
   npm install
   ```

### 2. Run the Test Cases

1. **Ensure that the Backend Server is Not Running:**
   The backend server should not be running while running the tests to avoid conflicts.

2. **Run the Jasmine Test Suite:**
   ```bash
   npx jasmine
   ```

   This command will execute the Jasmine test cases and display the results in your terminal.

### 3. View Test Results

- Jasmine will output the results of the test cases, including which tests passed or failed. Review these results to ensure that all test cases have passed and to identify any issues.

## Running the Project

To run the backend server and test the registration API:

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Server:**
   ```bash
   node app
   ```

   The server will start on `http://localhost:4000` by default.

## Frontend Integration

The frontend is developed separately using ReactJS and styled with Tailwind CSS. Integration with the backend APIs is done through fetch requests in the React components.

## Conclusion

Milestone 2 has successfully established the user registration functionality for the Instagram clone project. The backend APIs are now tested and validated. Future milestones will focus on frontend integration and additional features.

