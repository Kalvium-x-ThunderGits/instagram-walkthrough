## **Milestone 22 - Delete Post API**

### **Overview**

Milestone 22 focuses on implementing the backend API for deleting posts. This functionality allows users to delete their own posts, with proper checks to ensure that only the post owner can perform this action. The implementation also includes handling invalid tokens and non-existent posts.

### **Topics Covered in Milestone 22**

- **Delete Post Functionality**: Developed API endpoint to allow users to delete their posts.
- **Authentication and Authorization**: Implemented checks to ensure that only authenticated users and post owners can delete posts.
- **Error Handling**: Added error handling for scenarios such as invalid tokens, non-ownership of the post, and attempts to delete non-existent posts.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ051_delete_post_successfully**
  - Verifies that a post is deleted successfully when requested by the authenticated owner of the post.

- **REQ052_not_delete_post_with_invalid_token**
  - Ensures that the API returns an error when a delete request is made with an invalid token, preventing unauthorized deletions.

- **REQ053_not_delete_post_if_not_owner**
  - Confirms that a post cannot be deleted by a user who is not the owner of the post, enforcing proper ownership rules.

- **REQ054_not_delete_non_existing_post**
  - Checks that the API returns an appropriate error when attempting to delete a post that does not exist, ensuring robust error handling.

### **Running Backend Test Cases**

To run test cases for the backend:

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

   This command will run the test cases and provide the results in your terminal.

3. **View Test Results**

   The testing framework will output the results of the test cases, indicating which tests passed or failed. Review these results to ensure that all test cases pass successfully.

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
