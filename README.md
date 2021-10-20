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

Method: GET
Path: /person
Expects a query string from the user with a “name” property
When present, output JSON to the client with this shape: { name: "name provided" }
Without a name in the query string, force a “500” error
