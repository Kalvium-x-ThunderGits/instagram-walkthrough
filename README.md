

## **Milestone 33 - Implementing User Search - Backend**

### **Overview**

Milestone 33 focuses on the backend implementation of user search functionality. This feature supports the frontend by providing the necessary endpoints and logic to search for users based on various criteria.

### **Topics Covered in Milestone 33**

- **User Search Backend Integration**: Implemented the backend functionality to search for users and return relevant results to the frontend.
- **Backend Testing**: Added test cases to ensure the backend search functionality works correctly.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ078]_should_render_input_field_correctly**
  - Verifies that the input field for the search query is rendered correctly.

- **[REQ079]_should_render_search_results_correctly**
  - Ensures that the search results are correctly rendered based on the search query.

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
