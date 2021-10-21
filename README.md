# Basic Express Server

Created by Sarah Creager

## Installation
`npm install`

## Dependencies
 * dotenv
 * express
 * jest
 * supertest
 * Sequelize

## Summary of Problem Domain
Built basic express server and deployed to Heroku, includes GET, PUT, DELETE routes, middleware, and tests. Includes 2 SQL data models using the Sequelize libary.

## Links to application deployment

[Deployed Heroku Application](https://sarah-basic-express-server.herokuapp.com/)

[GitHub](https://github.com/SarahCreager/basic-express-server.git)

## UML

![UML](./src/img/UML.png)

## Routes

Method: GET
Path: /person
Expects a query string from the user with a “name” property
When present, output JSON to the client with this shape: { name: "name provided" }
Without a name in the query string, force a “500” error
