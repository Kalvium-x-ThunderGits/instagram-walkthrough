## **Milestone 26 - Frontend for Other UserProfile with Follow/Unfollow**

### **Overview**

Milestone 26 focuses on implementing the frontend functionality to view other users' profiles and enabling follow/unfollow actions. This includes displaying the profile information of other users and providing buttons to follow or unfollow them, depending on the user's relationship status.

### **Topics Covered in Milestone 26**

- **View Other User Profiles**: Developed the UI to display other users' profile information.
- **Follow/Unfollow Functionality**: Implemented buttons and state management for following and unfollowing users.
- **API Integration**: Connected the follow and unfollow actions on the frontend to the backend API, ensuring smooth interaction and state updates.
- **Dynamic UI Updates**: Handled the dynamic update of the follow/unfollow buttons based on the current state.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ064_should_follow_the_user_when_follow_button_is_clicked**
  - Verifies that the user is followed when the "Follow" button is clicked, and the UI updates to reflect the new relationship status.

- **REQ065_should_unfollow_the_user_when_unfollow_button_is_clicked**
  - Ensures that the user is unfollowed when the "Unfollow" button is clicked, and the UI updates accordingly.

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
