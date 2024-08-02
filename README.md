## **Milestone 12 - Fetching and Displaying Posts on Home Page**

### **Overview**

Milestone 12 focuses on fetching and displaying posts on the home page of the application. This involves creating functionality to retrieve posts from the backend and display them effectively in the frontend.

### **Topics Covered in Milestone 12**

- **Fetching Posts**: Implemented the functionality to fetch all posts from the backend.
- **Displaying Posts**: Developed the UI to display fetched posts on the home page.
- **Frontend Testing**: Added Jasmine test cases to verify the correct fetching and displaying of posts.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ026_fetch_all_posts_successfully**
  - Verifies that all posts are fetched successfully from the backend and displayed on the home page.

- **REQ027_fetch_no_posts**
  - Ensures that the application handles scenarios where no posts are available to fetch, displaying an appropriate message or state.

### **Running Jasmine Test Cases**

To run Jasmine test cases for the frontend:

1. **Set Up Your Environment**

   Navigate to the frontend directory and install the necessary dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Test Cases**

   Execute the Jasmine test suite:
   ```bash
   npm run test:serve
   ```

   This command will run the Jasmine test cases and provide the results in your terminal.

3. **View Test Results**

   Jasmine will output the results of the test cases, indicating which tests passed or failed. Review these results to ensure that all test cases pass successfully.

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
