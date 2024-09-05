

## **Milestone 32 - Implementing User Search - Frontend**

### **Overview**

Milestone 32 focuses on the frontend implementation of user search functionality. This feature allows users to search for other users within the application, displaying relevant results based on the search query.

### **Topics Covered in Milestone 32**

- **User Search Implementation**: Integrated the frontend functionality to search for users and display the search results.
- **Frontend Testing**: Added test cases to ensure the search functionality works correctly under various scenarios.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ076]_search_users_successfully**
  - Verifies that the search functionality successfully returns and displays relevant user results based on the search query.

- **[REQ077]_search_users_no_results**
  - Ensures that the system correctly handles scenarios where no users match the search query, displaying an appropriate message.

### **Running Frontend Test Cases**

To run the frontend test cases:

1. **Set Up Your Environment**

   Navigate to the frontend directory and install the necessary dependencies:
   
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Test Cases**

   Execute the test suite:
   
   ```bash
   npm run test
   ```

   This command will run the frontend test cases and display the results in your terminal.

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
