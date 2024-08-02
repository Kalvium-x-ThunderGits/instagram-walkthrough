
## **Milestone 14 - Integrating Supabase Cloud Store for Storing Images**

### **Overview**

Milestone 14 focuses on integrating Supabase Cloud Store to manage and store images. This integration allows users to upload images, which are then stored in the cloud and displayed within the application.

### **Topics Covered in Milestone 14**

- **Supabase Cloud Store Integration**: Implemented Supabase Cloud Store to handle image uploads and storage.
- **Frontend Testing**: Added Jasmine test cases to verify the correct uploading and rendering of images.

### **Frontend Test Cases**

The following test case has been implemented and has passed:

- **REQ031_should_upload_an_image_and_render_it_correctly**
  - Verifies that an image is uploaded to Supabase Cloud Store successfully and rendered correctly in the application.

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
