## **Milestone 13 - Dynamic Profile Page**

### **Overview**

Milestone 13 focuses on creating a dynamic profile page by fetching user data from the database and displaying it in the profile page component. This ensures that each user's profile page displays their unique information and posts.

### **Topics Covered in Milestone 13**

- **Fetching User Data**: Implemented functionality to retrieve user data from the database.
- **Dynamic Profile Page**: Developed the profile page component to display the fetched user data.
- **Backend Testing**: Added test cases to verify the correct fetching of user profile data.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ029_fetch_user_profile_successfully**
  - Verifies that user profile data is fetched successfully from the database.

- **REQ030_fetch_profile_with_invalid_token**
  - Ensures that an error is returned when attempting to fetch profile data with an invalid token.

### **Running Backend Test Cases**

To run backend test cases for fetching user profile data:

1. **Set Up Your Environment**

   Navigate to the backend directory and install the necessary dependencies:
   ```bash
   cd backend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite (assuming you are using a testing framework like Mocha or Jest):
   ```bash
   npm run test
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


Please review and let me know if there are any changes or additional details you’d like to include. If you have the details for the next milestone, feel free to share them.
