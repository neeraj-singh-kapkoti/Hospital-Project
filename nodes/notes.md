# 1 HTTP in details

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. 
Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers

Below are some important notes about HTTP:
## Overview

HTTP follows a client-server model where clients, such as web browsers, make requests to servers, and servers respond with the requested resources, such as web pages or files.

## Key Concepts

### Stateless Protocol

HTTP is stateless, meaning each request from a client to a server is independent and does not retain any knowledge of previous requests.

### Request-Response Cycle

An HTTP transaction typically consists of a request sent from the client to the server and a response sent from the server back to the client.

### HTTP Methods

HTTP defines several methods (also known as verbs) to indicate the desired action to be performed on a resource. Common methods include:
- GET: Retrieve data from the server.
- POST: Submit data to the server to create a new resource.
- PUT: Update an existing resource on the server.
- DELETE: Remove a resource from the server.
- PATCH: Apply partial modifications to a resource.

### URL Structure

URLs (Uniform Resource Locators) are used to specify the location of resources on the web. A URL typically consists of a scheme, hostname, path, and optional query parameters.

### Status Codes

HTTP responses include status codes to indicate the outcome of the request. Common status code categories include:
- 2xx: Success
- 3xx: Redirection
- 4xx: Client errors
- 5xx: Server errors

### Headers

HTTP messages (requests and responses) can include headers, which provide additional information about the message.

### State Management

While HTTP itself is stateless, web applications often require state management to maintain user sessions and track user interactions.

### Security

HTTP is inherently insecure, but HTTPS encrypts data using SSL/TLS protocols to provide secure communication between clients and servers.

```javascript
const http = require("http")

const server = http.createServer((request, response) => {
    const { method, url, headers } = request
    if (url === "/cats") {
        response.statusCode = 200
        response.setHeader("Content-Type", "application/json")
        const responseBody = {
            headers,
            method,
            url,
            body: ["Mrs. Meowsers", "Hairball", "Jerk"]
        }

        response.write(JSON.stringify(responseBody))
        response.end()
    }
    else {
        response.setHeader("Content-Type", "text/html")
        response.statusCode = 200
        response.end("<html><body><h1>Hello, World!</h1></body></html>")
    }
})


const PORT = 8000

server.listen(PORT, () => {
    console.log("server is running");
})
```

### Common request headers include:
- Accept: Specifies the media types that the client can understand.
- User-Agent: Identifies the client software making the request (e.g., browser name and version).
- Authorization: Contains credentials for authenticating the client with the server (e.g., API tokens, Basic Auth credentials).
- Content-Type: Specifies the MIME type of the request body (e.g., application/json, text/plain).
- Cookie: Contains cookies previously set by the server and sent back to the server with subsequent requests.

![Screenshot 2024-04-16 160748](https://github.com/Gaurav038/interview-notes/assets/78479119/a903700e-4753-44ae-a59f-98cd02fa17e7)

# 2.Express.js Details

Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for building and managing web servers, handling routes, middleware, and more.

## Getting Started

To use Express.js in your Node.js project, follow these steps:

1. Install Express.js as a dependency in your project:
   ```bash
   npm install express

2. Require Express in your Node.js application:

```bash
const express = require('express');
```
3. Create an Express application:

```bash
const app = express();
```
4. Define routes and middleware to handle incoming requests:
   
```bash
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
```
5. Start the Express server:

```bash
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
## Features
Routing
Express provides a simple and flexible routing mechanism to handle different HTTP requests and URLs.

```bash
app.get('/users', (req, res) => {
  // Handle GET request to /users
});


app.post('/users', (req, res) => {
  // Handle POST request to /users
});
```
Middleware
Middleware functions are functions that have access to the request, response, and the next middleware function in the application's request-response cycle.

```bash
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(loggerMiddleware); // Custom middleware
```
Error Handling
Express allows you to define error-handling middleware functions to handle errors that occur during request processing.

```bash
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});
```

# Express Middleware

Middleware in Express.js are functions that have access to the request and response objects in an HTTP application's request-response cycle. They can perform tasks such as executing code, modifying request and response objects, and terminating the request-response cycle.

## Middleware Functions

- express.static

`express.static` is used to serve static files, such as HTML, CSS, and JavaScript files, from a specified directory. It is commonly used for serving images, CSS, and JavaScript files in a web application.

```javascript
app.use(express.static('public'));
```
- express.json
express.json parses incoming JSON payloads and makes the parsed data available on the req.body property of the request object. It is used to handle JSON request bodies.

```javascript
app.use(express.json());
```
- express.urlencoded
express.urlencoded parses incoming URL-encoded payloads and makes the parsed data available on the req.body property of the request object. It is used to handle form submissions.

```javascript
app.use(express.urlencoded({ extended: true }));
```
- Custom Middleware
Developers can create custom middleware functions to perform specific tasks or implement application-specific logic. Custom middleware functions typically have the signature (req, res, next).

```javascript
function loggerMiddleware(req, res, next) {
  console.log('Request received:', req.method, req.url);
  next();
}
app.use(loggerMiddleware);
```
- Error Handling Middleware
Error handling middleware functions have a different signature with four parameters (err, req, res, next). They are used to handle errors that occur during the request-response cycle.

```javascript
function errorHandler(err, req, res, next) {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
}
app.use(errorHandler);
```
