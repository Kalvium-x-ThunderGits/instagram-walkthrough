

## Milestone 2: Backend Endpoint for User Registration

In this milestone, we set up the backend endpoint for user registration. This involves creating the necessary API route, connecting to the database, and ensuring proper validation and error handling.

### Tasks Completed

1. **User Model:**
   - Defined the User model with fields for username, email, and password.
   - Added validation for required fields and email format.

2. **Registration Endpoint:**
   - Created the `/api/register` endpoint in the backend.
   - Implemented request validation to ensure all required fields are provided and valid.
   - Added password hashing for security using bcrypt.
   - Connected to the database to save the new user record.

3. **Error Handling:**
   - Implemented error handling for common scenarios such as missing fields, invalid email format, and duplicate email registration.
   - Provided meaningful error messages in the response.

4. **Testing:**
   - Added Jasmine tests to validate the registration process.
   - Ensured tests cover successful registration, validation errors, and duplicate email scenarios.

### Steps to Reproduce

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/instagram-clone.git
   cd instagram-clone
   ```

2. **Install dependencies:**

   ```bash
   # Install backend dependencies
   cd backend
   npm install
   ```

3. **Set up the database:**

   - Ensure your PostgreSQL or MySQL database is running.
   - Update the database connection details in `backend/config/database.js`.

4. **Environment variables:**

   - Ensure your `.env` file in the `backend` directory includes:

     ```env
     DATABASE_URL=your_database_url
     JWT_SECRET=your_jwt_secret
     ```

5. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

6. **Testing the Registration Endpoint:**

   - Use a tool like Postman to send a POST request to `http://localhost:5000/api/register` with the following JSON body:

     ```json
     {
       "username": "testuser",
       "email": "testuser@example.com",
       "password": "SecurePass123"
     }
     ```

   - Verify that the response indicates a successful registration, or provides an appropriate error message.

7. **Run backend tests:**

   ```bash
   cd backend
   npm test
   ```

### API Endpoint

**POST /api/register**

- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

- **Response:**
  - Success: 
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - Error: 
    ```json
    {
      "error": "Error message"
    }
    ```

### Next Steps

In the next milestone, we will set up the frontend registration form and connect it to our backend registration endpoint. We will also implement validation logic on the frontend to provide a seamless user experience.

---

