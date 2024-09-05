
# Milestone-31: Frontend Introducing Lazy Loading

## Overview

This milestone focuses on implementing lazy loading for posts in the frontend. The initial posts will be fetched when the component renders, and more posts will be loaded as the user scrolls to the bottom of the page.

## Components and Features

### 1. Lazy Loading Posts

- **Component:** `Posts`
- **Description:** This component fetches and displays posts. It implements lazy loading to fetch more posts as the user scrolls down.

### Test Cases

#### 1. Fetches Initial Posts on Component Render
- **Test Case ID:** `REQ074_fetches_initial_posts_on_component_render`
- **Description:** This test verifies that the initial set of posts is fetched when the `Posts` component is rendered.
- **Steps:**
  1. Render the `Posts` component.
  2. Verify that the initial posts are fetched and displayed.

#### 2. Loads More Posts When Scrolled to Bottom
- **Test Case ID:** `REQ075_loads_more_posts_when_scrolled_to_bottom`
- **Description:** This test verifies that more posts are fetched and loaded as the user scrolls to the bottom of the page.
- **Steps:**
  1. Render the `Posts` component with initial posts.
  2. Simulate scrolling to the bottom of the page.
  3. Verify that additional posts are fetched and displayed.

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

1. The `Posts` component will fetch the initial set of posts when it is rendered.
2. As the user scrolls down the page and reaches the bottom, additional posts will be fetched and displayed.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management for handling posts and lazy loading state.
- **Jest**: Testing framework for writing and running test cases.
- **React Testing Library**: Utility for testing React components.
