
## **Milestone 9 - Creating Add Post Component UI**

### **Overview**

Milestone 9 focuses on designing and implementing the Add Post Component User Interface (UI) for the application. The goal is to create an intuitive and seamless experience for users to add new posts to the platform.

### **Topics Covered in Milestone 9**

- **Add Post Component UI Design**: Developed a user-friendly interface for the Add Post component, allowing users to create and share new posts easily.
- **Frontend Testing**: Added Jasmine test cases to verify the correct rendering and functionality of the Add Post component.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ018_should_render_the_CreatePost_component_correctly**
  - Verifies that the `CreatePost` component is rendered correctly.

- **REQ019_should_call_handleShare_and_closeModal_when_the_Share_button_is_clicked**
  - Ensures that the `handleShare` function is called, and the modal closes when the Share button is clicked.

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
