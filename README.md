## **Milestone 21 - Read Comments (Frontend)**

### **Overview**

Milestone 21 focuses on implementing the frontend functionality for reading and displaying comments on posts. This includes handling user inputs, managing the state for new comments, and integrating the functionality to add new comments when the "Post" button is clicked.

### **Topics Covered in Milestone 21**

- **Displaying Comments**: Developed the frontend components to fetch and display comments for posts.
- **User Interaction**: Implemented features to handle user interactions, including adding new comments and updating the comment input field.
- **State Management**: Managed the state for user inputs to ensure a responsive and dynamic user experience.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ049_calls_handleAddComment_when_the_Post_button_is_clicked**
  - Verifies that the `handleAddComment` function is called when the "Post" button is clicked, ensuring that the comment submission process is triggered correctly.

- **REQ050_updates_newComment_state_on_input_change**
  - Ensures that the `newComment` state is updated correctly as the user types in the comment input field, allowing for real-time feedback and interaction.

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
