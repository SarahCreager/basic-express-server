# Basic Express Server

Created by Sarah Creager

## Installation
`npm install`

## Dependencies
 * dotenv
 * express
 * jest
 * supertest

## Summary of Problem Domain
Build basic express server and deploy to Heroku, includes GET and POST routes, middleware, and tests.

## Links to application deployment

[Deployed Heroku Application](https://sarah-basic-express-server.herokuapp.com/)

## UML

![UML](./UML.png)

## Routes

* HTTP GET
  * Path: /repeat
    * responds with the last string used in post route `/talk`.

* HTTP POST
  * Path: /talk
    * Accepts a string.
    * responds with a string.
