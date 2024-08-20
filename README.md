## **Milestone 23 - Delete Post Frontend**

### **Overview**

Milestone 23 focuses on implementing the frontend functionality for deleting posts. This includes the user interface elements for initiating a post deletion, confirming the action through a modal, and ensuring that the deletion process is handled smoothly and securely.

### **Topics Covered in Milestone 23**

- **Delete Post UI**: Developed the frontend components for deleting posts, including a delete icon and a confirmation modal.
- **Modal Interaction**: Implemented the logic to open and close the delete confirmation modal based on user actions.
- **Post Deletion**: Integrated the frontend with the backend API to delete posts when the user confirms the action.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ055_should_open_the_delete_modal_when_delete_icon_is_clicked**
  - Verifies that the delete confirmation modal is opened when the user clicks on the delete icon, initiating the post deletion process.

- **REQ056_should_delete_post_when_confirm_button_in_modal_is_clicked**
  - Ensures that the post is deleted when the user clicks the confirm button in the delete modal, and that the UI updates accordingly.

- **REQ057_should_close_the_delete_modal_when_cancel_button_is_clicked**
  - Confirms that the delete confirmation modal is closed without deleting the post when the cancel button is clicked, allowing the user to abort the deletion.

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

---
