

# Instagram Clone - Milestone 2

## Overview

In Milestone 2, we have focused on developing and testing the backend APIs for user registration in the Instagram clone project. The backend is built using ExpressJS and NodeJS, with SQLite as the database. We use Jasmine for unit testing the backend, while the frontend is developed using ReactJS with Tailwind CSS for styling.

## Topics Covered in Milestone 2

- **Backend API Development**: Created RESTful APIs for user registration.
- **Database Integration**: Configured SQLite database for storing user data.
- **Testing**: Implemented Jasmine test cases to ensure the correctness of the registration functionality.

## Backend APIs

The following APIs have been developed in this milestone:

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

The following test cases were implemented and passed for the backend user registration functionality:

- **REQ003_register_new_user_successfully**
  - Tests that a new user can be registered successfully with valid details.

- **REQ004_not_register_a_user_with_an_existing_email**
  - Tests that a user cannot be registered if the email already exists in the database.

- **REQ005_not_register_a_user_with_an_existing_username**
  - Tests that a user cannot be registered if the username already exists in the database.

## Running Backend Test Cases

To run the Jasmine test cases for the backend, follow these steps:

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Tests:**
   ```bash
   npm test
   ```

   This command will execute the Jasmine test suite and output the results in the terminal. Ensure that the backend server is not running while performing tests to avoid conflicts.

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
   npm start
   ```

   The server will start on `http://localhost:4000` by default.

## Frontend Integration

The frontend is developed separately using ReactJS and styled with Tailwind CSS. Integration with the backend APIs is done through fetch requests in the React components.

## Conclusion

Milestone 2 has established the foundation for user registration functionality in the Instagram clone project. With the backend APIs implemented and thoroughly tested, the next milestone will focus on integrating these APIs with the frontend and adding more features.

## Contact

For any questions or issues, please contact the development team at [support@instagram-clone.com](mailto:support@instagram-clone.com).

---
