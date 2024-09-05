
## **Milestone 32 - Implementing User Search - Backend**

### **Overview**

Milestone 32 focuses on the backend implementation of user search functionality. This feature allows users to search for other users based on specified criteria, such as usernames or other attributes.

### **Topics Covered in Milestone 32**

- **User Search Implementation**: Developed backend functionality to enable searching for users based on various criteria.
- **Backend Testing**: Added test cases to verify the correct operation of the search functionality, including handling cases with and without search results.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ076]_search_users_successfully**
  - Verifies that the user search functionality returns correct results when valid search criteria are provided.

- **[REQ077]_search_users_no_results**
  - Ensures that the system correctly handles scenarios where no users match the search criteria.

### **Running Backend Test Cases**

To run the backend test cases:

1. **Set Up Your Environment**

   Navigate to the backend directory and install the necessary dependencies:
   
   ```bash
   cd backend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite:
   
   ```bash
   npm run test
   ```

   This command will run the backend test cases and display the results in your terminal.

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
