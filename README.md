# tech-thoughts
![license](https://img.shields.io/github/license/labchild/tech-thoughts) ![issues](https://img.shields.io/github/issues/labchild/tech-thoughts) ![express version](https://img.shields.io/github/package-json/dependency-version/labchild/tech-thoughts/express)
A CMS, community-driven blog for developers, engineers, and programmers to connect, learn, and share knowledge.


### Table of Contents
* [Description](#description)
    * [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Questions & Contact](#questions-&-contact)
* [Acknowledgements ❣](#acknowledgements-❣)

## Description
[tech thoughts](https://thawing-springs-08911.herokuapp.com/) is a Word Press-style CMS blog where users can post their thoughts and questions about the tech sphere. It uses a SQL database (MySQL), express server, and built in node.js environment.

Users can create an account, create posts (thoughts), like posts, and comment on posts. Users can also access, edit, and delete their own posts from an account dashboard.

### Built With
This project uses the following packages:
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL 2](https://www.npmjs.com/package/mysql2)
* [Express](https://expressjs.com/)
    * [Express Session](https://www.npmjs.com/package/express-session)
    * [Connect Session Store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [Handlebars](https://handlebarsjs.com/)
    * [Express Handlebars View Engine](https://www.npmjs.com/package/express-handlebars)

## Installation
This project requires a MySQL database and node.js. To run this project from your local host, download or clone this repository to your computer. You will need enviroment variables (```.env``` file). Create one (```touch .env```) in the project root folder and include the following information:
```
DB_NAME="tech_thoughts_db"
DB_USER="<your_username>"
DB_PW="<your_password>"
```

Navigate to the project root folder from your CLI and and open your MySQL shell to start the MySQL server. From the MySQL shell, run the command ``` source db/schema.sql ``` to set up the database. Close the MySQL shell.

Next, from the project root folder, run the following commands in your CLI: 
``` 
npm i 
npm start 
```

tech thoughts is now set up, installed, and running on your local host!

## Usage
Navigate to [tech thoughts](https://thawing-springs-08911.herokuapp.com/) in your web browser. From the homepage, you can see all posts available and a nav bar with a login option. You may view posts, comments, and likes without signing up for an account, but you can not create any data. If you try, you will be redirected to the login page.

![homepage preview](/public/images/homepage-preview.png)

To start posting, click the login link in the nav bar at the top of the page. You'll be directed to the login page where you can login or sign up for an account. Enter your details and click the appropriate _submit_ button to start sharing your tech thoughts. You willl then be sent back to the homepage.

![login preview](/public/images/login-preview.png)

To view your own posts and account information, click the _dashboard_ link in the nav bar. From your acount dashboard, you can view your posts, create a new post, or change your username. To edit a post, simply click the _edit post_ button beneath the post you'd like to change.

![dashboard preview](/public/images/dashboard-preview.png)

If you click on the _edit post_ button for any of your posts, you will be sent to a new page where you can change your post title or the post body. When you're done making changes, click _submit_ to save. If you'd like to delete the post, click the _delete_ button. This action is **permanent and can't be reveresed**, you will be asked to confirm before your delete request is sent.

![edit preview](/public/images/edit-preview.png) ![delete preview](/public/images/delete-preview.png)

When you're done using tech thoughts, you can logout by clicking the _logout_ link in the nav bar at the top of the page. If you are idle on tech thoughts for more than 20 minutes, you will be logged out automatically.

## License ![license](https://img.shields.io/github/license/labchild/tech-thoughts)
This is an open source project and falls under an MIT license.

## Tests
This project includes tests on custom helper functions using [Jest](https://www.npmjs.com/package/jest) testing framework.

<img src="/public/images/test-preview.png" alt="test suite preview" width="80%">

## Questions & Contact
Written and deployed by Lelah Bates Childs.

You can find me on GitHub @labchild or [email me](mailto:labchilds@gmail.com). If you have any questions about this project, please reach out.

If you encounter any bugs or other problems, [submit an issue](https://github.com/labchild/tech-thoughts/issues).

### Want to Help?
Do you see something I missed or a more succint and effective way this code can be written? Great! Please reach out and let me know how I can improve. Thanks in advance for your tips, tricks, and pointers!

## Acknowledgemnts
Thank you to my bootcamp instructional team and cohort, for helping me along this journey to become a developer.