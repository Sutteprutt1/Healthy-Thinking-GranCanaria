# Healthy-Thinking-GranCanaria
The 17 world goals - a group project on healthcare and motivation




#### Get started

##### Requirements

- MySQL Server
- MySQL Workbench.
- PostMan, for RESTFul tests.
- Visual Studio Code.

To init your application in your local server, create a new folder and open with Visual Studio Code. Then, open the terminal and typing the following commands:

* clone repository
    ```sh
    git clone https://github.com/Sutteprutt1/Healthy-Thinking-GranCanaria/
    ```

You have the project in your computer, now.

##### Frontend

[![React][react.io]][react.url]

We should go into the project folder. So, we should the next command:

* Go into the project folder
    ```sh
    cd healthy-Thinking-GranCanaria
    ```


And then, we must install dependecies to set-up the frontend:

* Install dependecies
    ```sh
    npm install
    ```

When dependencies have been installed, you can go to set up your backend.

##### Backend

[![Sequelize][sequelize.io]][Sequelize.url]

We should go into the backend folder after setting up the frontend, so you should use the "cd " command like this:

* Go into the backend folder
    ```sh
    cd backend
    ```

Now, we must install dependencies with the same command of the frontend. When we finished it, we must create a database with MySQL Workbench called healthy_thinking.

Then, we will decomment some lines in server.js file and comment another line to drop and re-build the database. This will be able to create our tables in our db. Then, we should start the backend with the follow command:

* Start backend
    ```sh
    npm start
    ```

---

<!-- MARKDOWN LINKS AND IMAGES -->

[react.io]: https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react&logoColor=blue
[react.url]: https://es.reactjs.org

[sequelize.io]: https://img.shields.io/badge/Backend-Sequelize-aqua?style=flat-square&logo=sequelize&logoColor=aqua
[sequelize.url]: https://sequelize.org