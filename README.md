## **Milestone 15 - Create Post Component - Making it Functional**

### **Overview**

Milestone 15 focuses on creating and enhancing the Post component within the application, ensuring it is fully functional and interactive. This includes handling user interactions, such as sharing posts and managing access based on authentication status.

### **Topics Covered in Milestone 15**

- **Post Component Development**: Developed and enhanced the Post component to manage content and user interactions effectively.
- **User Authentication Handling**: Implemented redirects and access management based on user authentication status.
- **Interactive Features**: Added functionality for users to interact with posts, including sharing and liking.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ019_should_call_handleShare_when_the_Share_button_is_clicked**
  - Verifies that the Share button triggers the appropriate action when clicked by the user.

- **REQ032_should_redirect_to_/signin_for_unauthenticated_users**
  - Ensures that unauthenticated users are redirected to the `/signin` page when they attempt to interact with the Post component.

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

