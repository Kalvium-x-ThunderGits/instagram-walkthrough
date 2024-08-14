
## **Milestone 16 - Log Out Functionality**

### **Overview**

Milestone 16 focuses on implementing the log out functionality within the application. This feature allows users to safely log out of the application, ensuring that their session is properly terminated and user data is secure.

### **Topics Covered in Milestone 16**

- **Log Out Functionality**: Implemented a log out process that terminates the user's session securely.
- **User Interface Enhancements**: Added a modal interface to confirm log out actions, improving user experience.
- **Event Handling**: Managed user interactions through event handlers to confirm or cancel log out.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ033_shows_logout_modal_after_logout_button_click**
  - Verifies that the log out confirmation modal is displayed when the log out button is clicked.

- **REQ034_calls_onConfirm_when_the_Logout_button_is_clicked**
  - Ensures that the appropriate action is called when the log out button in the modal is clicked.

- **REQ036_calls_onClose_when_the_modal_close_button_is_clicked**
  - Checks that the appropriate action is called when the close button on the modal is clicked.

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

