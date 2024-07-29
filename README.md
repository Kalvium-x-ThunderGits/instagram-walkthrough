## **Milestone 7 - Designing Home Page UI**

### **Overview**

Milestone 7 focuses on designing and implementing the Home Page User Interface (UI) for the application. The goal is to create a visually appealing and functional home page that enhances the user experience.

### **Topics Covered in Milestone 7**

- **Home Page UI Design**: Developed a user-friendly and aesthetically pleasing home page layout.
- **Frontend Testing**: Added Jasmine test cases to verify the correct rendering and functionality of the home page components.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ014_renders_FeedCard_component_with_feed_data**
  - Verifies that the `FeedCard` component is rendered correctly with the provided feed data.

- **REQ015_renders_search_input_and_button_correctly**
  - Ensures that the search input field and button are rendered correctly on the home page.

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
   npx run test:serve
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

