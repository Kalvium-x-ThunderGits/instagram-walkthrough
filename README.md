## **Milestone 24 - Writing Backend APIs for GetProfileByUsername, Follow, Unfollow**

### **Overview**

Milestone 24 involves the implementation of backend APIs for retrieving user profiles based on their usernames and handling follow/unfollow functionalities. These APIs enable users to follow and unfollow other users and view profiles through secure and authenticated endpoints.

### **Topics Covered in Milestone 24**

- **Get User Profile by Username**: Developed an API to fetch a user's profile information using their username.
- **Follow Functionality**: Created an API to allow users to follow other users.
- **Unfollow Functionality**: Built an API to allow users to unfollow other users.
- **Authentication and Authorization**: Implemented security measures to ensure that only authenticated users can follow or unfollow others.
- **Error Handling**: Managed cases where users attempt to fetch non-existent profiles or interact with follow/unfollow actions incorrectly.

### **Backend Test Cases**

The following test cases have been implemented and have passed:

- **REQ058_fetch_user_profile_by_username_successfully**
  - Verifies that the API successfully retrieves a user's profile when a valid username is provided.

- **REQ059_fetch_non_existing_user_profile**
  - Ensures that the API returns an error or appropriate response when attempting to fetch a profile with a non-existent username.

- **REQ060_follow_user_successfully**
  - Confirms that the follow API allows an authenticated user to follow another user successfully.

- **REQ061_unfollow_user_successfully**
  - Ensures that the unfollow API allows an authenticated user to unfollow another user successfully.

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
