# Angular Material Token Tracker

This project is a simple Angular frontend application that interacts with a backend ASP.NET Web API to track token data. It provides three main pages: Login, Info, and Update.

## Demo
[Demo link](https://master--helpful-sunburst-4fbe90.netlify.app)

## Features

- **Login Page**: Allows users to authenticate. It includes validation to prevent empty input data.
- **Info Page**: Displays the current token data fetched from the backend. It formats token amounts from wei and displays them in separate cards for Name, Total Supply, and Circulating Supply.
- **Update Page**: Available only to authenticated users. Contains a button to update the token data on the backend.

## Technologies Used

- Angular: Frontend framework
- Angular Material: UI component library for Angular
- ASP.NET Web API: Backend API for token data management
- Entity Framework: Data access layer with Code First approach
- JWT-based Authentication: Secures endpoints with JWT tokens
- RxJS: Reactive Extensions for JavaScript for handling asynchronous data streams

## Installation

1. Clone the repository:
      ```
   git clone https://github.com/saraheisa/token-frontend.git
      ```

3. Install dependencies:
   ```
   cd token-frontend
   npm install
   ```

4. Start the Angular development server:
   ```
   ng serve
   ```

6. Open the application in your browser:
   Navigate to `http://localhost:4200/` to access the application.

## Usage

- **Login Page**: Enter any username and password to login. Validation prevents empty input data.
- **Info Page**: Displays the current token data fetched from the backend. Token amounts are formatted from wei.
- **Update Page**: Available only to authenticated users. Click the "Update Token Data" button to update the token data on the backend.

