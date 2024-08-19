## **Milestone 20 - Add Comments Frontend**

### **Overview**

Milestone 20 focuses on implementing the frontend functionality for adding comments to posts. This feature allows users to submit comments on posts directly from the user interface, with appropriate handling for both valid and empty inputs.

### **Topics Covered in Milestone 20**

- **Comment Submission UI**: Developed the user interface elements for adding comments to posts, including input fields and a submit button.
- **Input Validation**: Implemented checks to ensure comments are only submitted when the input is non-empty.
- **API Integration**: Connected the frontend to the backend API for adding comments, ensuring seamless communication and data flow.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ047_should_add_a_new_comment_when_post_button_is_clicked_with_non_empty_input**
  - Verifies that a new comment is added when the "Post" button is clicked and the input field contains a non-empty comment.

- **REQ048_should_not_make_an_api_call_when_the_comment_is_empty**
  - Ensures that no API call is made when the "Post" button is clicked with an empty input field, preventing empty comments from being submitted.

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

