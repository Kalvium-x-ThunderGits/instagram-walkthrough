## **Milestone 18 - Like and Unlike Frontend**

### **Overview**

Milestone 17 focuses on implementing the frontend functionality for liking and unliking posts. This feature allows users to interact with posts by liking them (indicated by an empty heart icon) or unliking them (indicated by a filled heart icon), enhancing user engagement within the application.

### **Topics Covered in Milestone 17**

- **User Interaction with Posts**: Implemented frontend features to allow users to like and unlike posts.
- **Dynamic UI Updates**: Developed interactive UI elements that change based on user actions (like/unlike).
- **Event Handling**: Managed user interactions through event handlers for liking and unliking posts.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ041_should_call_onLike_when_the_like_button_(empty_heart_icon)_is_clicked**
  - Verifies that the `onLike` function is called when the user clicks on the like button (empty heart icon).

- **REQ042_should_call_onUnlike_when_the_unlike_button_(filled_heart_icon)_is_clicked**
  - Ensures that the `onUnlike` function is called when the user clicks on the unlike button (filled heart icon).

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
