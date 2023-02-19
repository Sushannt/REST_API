#Node.js Express MongoDB REST API
================================

This project is a simple example of how to create a RESTful API using Node.js, Express, and MongoDB. It demonstrates how to implement the four basic CRUD operations (Create, Read, Update, Delete) for a simple resource.

Prerequisites
-------------

To run this project, you will need to have the following software installed on your system:

-   Node.js (v14 or later)
-   npm (Node.js package manager)
-   MongoDB (v4 or later)

Getting Started
---------------

To run the project, follow these steps:

1.  Clone the repository to your local machine.
2.  Navigate to the project directory and run `npm install` to install the required dependencies.
3.  Start a local MongoDB server using the `mongod` command (or specify a remote MongoDB server by updating the configuration file).
4.  Run `npm start` to start the Node.js server.

The server will start on port 3000 by default. You can test the API by sending HTTP requests to the following endpoints:

-   `GET /api/resource`: Retrieve a list of all resources.
-   `GET /api/resource/:id`: Retrieve a single resource by ID.
-   `POST /api/resource`: Create a new resource.
-   `PUT /api/resource/:id`: Update an existing resource by ID.
-   `DELETE /api/resource/:id`: Delete an existing resource by ID.

You can send requests to the API using a tool like cURL, or a web-based tool like Postman.

Technology Stack
----------------

This project uses the following technologies:

-   Node.js: A JavaScript runtime built on the V8 engine.
-   Express: A fast, unopinionated web framework for Node.js.
-   MongoDB: A popular NoSQL database that stores data in flexible, JSON-like documents.

REST API Principles
-------------------

This project follows the principles of Representational State Transfer (REST), a set of architectural constraints used for building web services. These constraints include:

-   Client-Server: Separation of concerns between the client and server.
-   Stateless: No client context is stored on the server between requests.
-   Cacheable: Responses must explicitly indicate whether they are cacheable or not.
-   Layered System: The client interacts with a series of layers that may be unaware of each other.
-   Uniform Interface: The interface between client and server is standardized, with a small number of well-defined operations.

CRUD Operations
---------------

The API supports the following CRUD operations:

-   Create: `POST /api/resource`
-   Read (All): `GET /api/resource`
-   Read (Single): `GET /api/resource/:id`
-   Update: `PUT /api/resource/:id`
-   Delete: `DELETE /api/resource/:id`
