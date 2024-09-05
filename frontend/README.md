
# Milestone-32:  Implementing User Search - Frontend

## Overview

This milestone focuses on implementing the backend API for user search functionality to be used by the frontend. The API will allow users to search for other users by their usernames and return the matching results.

## API Endpoints

### 1. Search Users

- **Endpoint:** `GET /api/users/search`
- **Description:** Searches for users based on the provided search term (username).
- **Query Parameters:**
  - `q`: The search term (username) to search for.
- **Response:**
  - `200 OK`: Returns a list of users matching the search term.
  - `204 No Content`: Returns no content when no users match the search term.

## Test Cases

### 1. Search Users Successfully
- **Test Case ID:** `REQ076_search_users_successfully`
- **Description:** This test verifies that the API successfully returns users matching the search term.
- **Steps:**
  1. Add sample users to the database.
  2. Send a `GET` request to `/api/users/search?q={username}` with a valid search term.
  3. Validate that the response status is `200 OK`.
  4. Verify that the response contains the correct users matching the search term.

### 2. Search Users with No Results
- **Test Case ID:** `REQ077_search_users_no_results`
- **Description:** This test verifies that the API returns no content when no users match the search term.
- **Steps:**
  1. Ensure no users in the database match the search term.
  2. Send a `GET` request to `/api/users/search?q={username}` with a search term that does not match any users.
  3. Validate that the response status is `204 No Content`.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your database connection details, JWT secret, and other required environment variables.

4. Run the development server:
   ```bash
   npm start
   ```

5. Run the tests:
   ```bash
   npm test
   ```

## Usage

1. The user search functionality can be accessed via the frontend by sending requests to the `/api/users/search` endpoint.
2. The frontend should handle the search results and display them to the user.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the API.
- **Mongoose**: ODM for MongoDB to handle database operations.
- **Jest**: Testing framework for writing and running test cases.
