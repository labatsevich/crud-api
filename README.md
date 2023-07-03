# Simple crud api (task 3 Node.JS 2023-Q2)

This is simple CRUD API, which is using in-memory database underneath.

Endpoint is **api/users**:

 * **GET** api/users or api/users/${userId} returns all users or user with corresponding userId
 * **POST** api/users is used to create record about new user and store it in database
 * **PUT** api/users/${userId} is used to update record about existing user
 * **DELETE** api/users//${userId} is used to delete record about existing user from database.

# App features

Please, wait for all servers to load before making a request.

The order of the fields (username, age, hobbies) is mandatory.

Database server is located on http:\\localhost:(PORT). So, if there are errors on server side of this localhost, then you will get an error.

Please keep in mind that in production mode, changes in the code do not automatically change the bundle. When changing the code, the bundle needs to be reassembled using a special command. In the development mode, tracking of code changes is organized.

Please, when you make request, make the body size adequate.

Errors on the server side are handled during the processing of a request (as specified in the task). Another do not handle and not required by the assignment.

# Installation 

To run this API server, you must do the following steps:

1. Clone this repository, for example:
    ```
    git clone https://github.com/labatsevich/crud-api.git
    ``` 
2. Switch branch to **develop**.
3. Run the command line and go to the created folder.
4. Install dependencies by entering the command
    ```
    npm install
    ``` 
5. Use commands:

    to run API server in development mode
    ```
    npm run start:dev
    ```

    or to build and run API server in production mode
    ```
    npm run start:prod
    ```
---

## How to use

Send your requests to url 
```
http://localhost:4000/api/users
```
4000 is port by default, you can change it in .env file.

Use Postman App to send request to the server. 

Body of POST and PUT object must have JSON body with:
  * `username` — user's name (`string`, **required**)
  * `age` — user's age (`number`, **required**)
  * `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)

The order of the fields (username, age, hobbies) is mandatory.
