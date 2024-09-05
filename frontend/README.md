
# Milestone-30: Frontend Implementing Google Login - Part 2

## Overview

This milestone focuses on the frontend implementation for Google Login, specifically rendering and submitting the CompleteProfile form. The form will collect the user's username and submit it to complete the profile setup after logging in with Google.

## Components and Features

### 1. CompleteProfile Form

- **Component:** `CompleteProfile`
- **Description:** This component renders a form that allows the user to enter a username and submit it to complete their profile.

### Test Cases

#### 1. Renders CompleteProfile Form with Username Input and Submit Button
- **Test Case ID:** `REQ072_renders_CompleteProfile_form_with_username_input_and_submit_button`
- **Description:** This test verifies that the `CompleteProfile` form is rendered correctly with a username input field and a submit button.
- **Steps:**
  1. Render the `CompleteProfile` component.
  2. Verify that the username input field is present.
  3. Verify that the submit button is present.

#### 2. Submits Form and Sends Correct Data
- **Test Case ID:** `REQ073_submits_form_and_sends_correct_data`
- **Description:** This test verifies that the form is submitted correctly and sends the correct data to the backend.
- **Steps:**
  1. Render the `CompleteProfile` component.
  2. Enter a valid username in the input field.
  3. Click the submit button.
  4. Verify that the form data is sent to the backend with the correct username.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your necessary environment variables for the frontend application.

4. Run the development server:
   ```bash
   npm start
   ```

5. Run the tests:
   ```bash
   npm test
   ```

## Usage

1. After logging in with Google, the user will be redirected to the `CompleteProfile` form if additional profile information is required.
2. The user enters a desired username and submits the form.
3. The frontend sends the username to the backend to complete the profile setup.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management for handling authentication and user data.
- **Jest**: Testing framework for writing and running test cases.
- **React Testing Library**: Utility for testing React components.
