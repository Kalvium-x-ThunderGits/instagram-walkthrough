# Instagram Clone - Milestone 1

This README file provides an overview of the progress made in Milestone 1 of the Instagram Clone project. It includes details on the technologies used, topics covered, test cases, and instructions on how to run the code and tests.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Topics Covered](#topics-covered)
- [Test Cases](#test-cases)
- [Running the Code](#running-the-code)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Running the Tests](#running-the-tests)
  - [Frontend Tests](#frontend-tests)
  - [Backend Tests](#backend-tests)

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Express**: Backend web application framework for Node.js.
- **SQLite**: Lightweight, disk-based database.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jasmine**: Testing framework for JavaScript.

## Topics Covered
### Frontend
- Creation of the UI for the Signup form using React and Tailwind CSS.

## Test Cases
### Jasmine Test Cases Passed
#### Frontend
1. **SignUp Component**
   - **[REQ001]**: Renders SignUp form with all necessary fields.
   - **[REQ002]**: Registers a new user and displays a success message.

## Running the Code
### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend application should now be running on `http://localhost:3000`.

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Express server:
   ```bash
   node app 
   ```
   The backend server should now be running on `http://localhost:5000`.

## Running the Tests
### Frontend Tests
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Run the tests:
   ```bash
   npm run test:serve
   ```
   This will run the Jasmine test cases for the frontend components.

### Backend Tests
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the tests:
   ```bash
   npx jasmine
   ```
   This will run the Jasmine test cases for the backend API endpoints.

---

Congratulations on completing Milestone 1 of the Instagram Clone project! Continue to the next milestone for further development and enhancements.
