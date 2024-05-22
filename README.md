# MVC Tech Blog

## Description
Welcome to the MVC Tech Blog! This project is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. The site is built from scratch, following the MVC paradigm, and is deployed on Heroku.

## Table of Contents

- [MVC Tech Blog](#mvc-tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Mpierson00/MVC-Tech-Blog.git
2. Navigate to the project directory:
    ```bash
    cd MVC-Tech-Blog
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up the environment variables:
 - Create a .env file in the root directory.
 - Add the following variables to the .env file:
   ```bash
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    SESSION_SECRET=your_session_secret
    ```
5. Initialize the database:
    ```bash
    npx sequelize db:create
    npx sequelize db:migrate
    ```

## Usage
1. Start the application:
    ```bash
    npm start
    ```
2. Open your browser and go to http://localhost:3001 to access the application.    

## Features
- User authentication (sign up, login, and logout).
- Create, update, and delete blog posts.
- View all blog posts on the homepage.
- View individual blog posts with comments.
- Comment on blog posts when logged in.
## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- MySQL2
- Sequelize ORM
- express-session
- connect-session-sequelize
- bcrypt
- dotenv
## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or feedback, feel free to contact me:


GitHub: [Mpierson00](https://github.com/Mpierson00/MVC-Tech-Blog)