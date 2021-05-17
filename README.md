401 class 02 lab
# LAB - 02
## basic-express-server
### Author: Neveen Beiram

# lab 02 


* [deployment for main branch ](https://neveen-basic-express-server.herokuapp.com/) .
* [submission PR](https://github.com/NeveenBeiram/basic-express-server/pulls) .
* [tests report](https://github.com/NeveenBeiram/basic-express-server/actions) .
 
### Setup

#### `.env` requirements

- `PORT` - 3000

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns message

    ```

    'welcome to server.js'

    ```
- Endpoint: `/person?name=name provided`
  - Returns an Object

    ```

    {
      "name": "name provided"
    }

    ```
    
- Endpoint: `/person`
  - Throws an error 500
  - Returns an Object

    ```

    {
        "status": 500,
        "message": "something went wrong ",
        "rout": "/err",
    }

    - Endpoint: `/bad`
  - Returns message

    ```

    'Something went wrong !!!!!';

    ```

    -Endpoint:`/person`
    -Returns an object
    
    ```
{
    name:the name from the query
}
    ```

     - Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

    ```

    {
        "status": 404,
        "message": "Sorry , Page not Found"
    }

    ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

