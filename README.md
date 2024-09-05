

## **Milestone 31 - Frontend Introducing Lazy Loading**

### **Overview**

Milestone 31 focuses on the implementation of lazy loading in the frontend. This feature improves the user experience by loading content incrementally as the user scrolls, reducing initial load times and enhancing performance.

### **Topics Covered in Milestone 31**

- **Lazy Loading Implementation**: Integrated lazy loading functionality to fetch and display additional posts as the user scrolls down the page.
- **Frontend Testing**: Added test cases to ensure the correct fetching and loading of posts.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ074]_fetches_initial_posts_on_component_render**
  - Verifies that the initial set of posts is fetched and displayed when the component is rendered.

- **[REQ075]_loads_more_posts_when_scrolled_to_bottom**
  - Ensures that more posts are loaded and appended to the existing list when the user scrolls to the bottom of the page.

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
