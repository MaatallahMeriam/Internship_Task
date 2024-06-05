# Project Overview

This project consists of a React application that provides users with the ability to create and delete accounts. The project includes form validation using Zod for account creation and a user-friendly interface for account deletion.

## Features

- Create Account Component: Users can create an account by providing their email, password, and years of experience. The form includes validation for email format and password length.
- Delete Account Component: Users can delete their account and provide feedback on the reason for deletion. The form includes several predefined reasons and an optional comments section.

### Installation

- Clone the repository:
git clone https://github.com/MaatallahMeriam/Internship-Task.git
- cd your-repo


- Install dependencies:
  npm install


### Running the Application
- To start the application, run:
npm start
The application will be available at http://localhost:3000.

### Testing

- To run tests, use:
npm test

### Components

- CreateAccount Component :
The CreateAccount component allows users to create an account by entering their email, password, and years of experience. The component uses Zod for form validation.

* Email: Must be a valid email format.
* Password: Must be at least 6 characters long.
* Years of Experience: Dropdown menu to select years of experience.
* Validation errors are displayed below the respective input fields.

- DeleteAccount Component:
The DeleteAccount component allows users to delete their account and provide feedback on the reason for deletion.
Reasons for Deletion:
- Privacy concerns
- No longer useful
- Irrelevant content
- Too many emails
- Others
## Dependencies
- React: ^18.0.0
- Zod: ^3.0.0
- @testing-library/react: ^13.0.0
