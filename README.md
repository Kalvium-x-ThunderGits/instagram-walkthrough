## **Milestone 25 - Backend API for Updating and Removing Profile Photo**

### **Overview**

Milestone 25 focuses on developing backend API functionality for updating and removing a user's profile photo. This allows users to upload a new profile photo or delete their existing one. The implementation ensures that only authenticated users can update or remove their profile photo, with appropriate error handling.

### **Topics Covered in Milestone 25**

- **Update Profile Photo API**: Developed an API endpoint that allows authenticated users to upload and update their profile photo.
- **Remove Profile Photo API**: Created an API endpoint to allow users to delete their existing profile photo.
- **Authentication**: Ensured that only authenticated users can update or remove their profile photo.
- **Error Handling**: Added error handling for scenarios where requests are made by unauthorized users or if there are issues during the photo upload or removal process.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ062_update_profile_photo_successfully**
  - Verifies that a user can successfully update their profile photo by uploading a new image.

- **REQ063_delete_profile_photo_successfully**
  - Confirms that a user can successfully delete their existing profile photo.

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

