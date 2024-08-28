## **Milestone 28 - Frontend for Update/Remove Profile Photo & My Following Post**

### **Overview**

Milestone 28 enhances the frontend by adding the ability to update or remove the profile photo and view posts from users that the current user is following. These features provide a more personalized and interactive experience for users.

### **Topics Covered in Milestone 28**

- **Update/Remove Profile Photo**: Implemented functionality to allow users to update or remove their profile photos.
- **My Following Post**: Added a section where users can view posts from the accounts they follow.
- **Frontend Testing**: Added Jasmine test cases to ensure the correct display and functionality of these new features.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **[REQ0068]_should_display_the_ProfilePicModal_when_the_profile_picture_is_clicked**
  - Verifies that the `ProfilePicModal` is displayed when the profile picture is clicked.

- **[REQ0069]_should_call_RemoveProfilePhotoInDatabase_when_the_Remove_Current_Photo_button_is_clicked**
  - Ensures that the function to remove the current profile photo from the database is called when the "Remove Current Photo" button is clicked.

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

   The backend server will be available at http://localhost:4000.

2. **Start the Frontend Application**

   Navigate to the frontend directory and start the React application:
   
   ```bash
   cd frontend
   npm start
   ```

   The frontend application will be available at http://localhost:3000.
