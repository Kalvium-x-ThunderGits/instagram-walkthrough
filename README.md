
## **Milestone 8 - Profile Page UI**

### **Overview**

Milestone 8 focuses on designing and implementing the Profile Page User Interface (UI) for the application. The objective is to create a user-friendly and informative profile page that displays user information and posts effectively.

### **Topics Covered in Milestone 8**

- **Profile Page UI Design**: Developed a clean and functional layout for the profile page, showcasing user details and posts.
- **Frontend Testing**: Added Jasmine test cases to verify the correct rendering and functionality of the profile page components.

### **Frontend Test Cases**

The following test cases have been implemented and have passed:

- **REQ016_should_render_username_correctly**
  - Verifies that the username is rendered correctly on the profile page.

- **REQ017_should_render_posts_with_correct_src_and_alt_attributes**
  - Ensures that the posts are rendered with the correct `src` and `alt` attributes for images.

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

