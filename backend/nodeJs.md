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

- Executing any code.
- Making changes to the request and response objects.
- Ending the request-response cycle.
- Calling the next middleware function in the stack.
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
## query and params

- req.query:
req.query is used to access the query parameters that are sent in the URL. These parameters are typically appended to the end of the URL after a question mark ? and are in the form of key-value pairs separated by ampersands &. For example, in the URL http://example.com/api/users?id=123&name=john, id and name are query parameters.
You can access the query parameters using req.query. It will return an object containing all the query parameters parsed from the URL.
Example:
```javascript

// URL: http://example.com/api/users?id=123&name=john
console.log(req.query.id);   // Output: 123
console.log(req.query.name); // Output: john
```
- req.params:
req.params is used to access route parameters specified in the route pattern. Route parameters are parts of the URL that match a specific pattern defined in the route. They are typically used to capture dynamic parts of the URL.
You define route parameters in Express.js routes using a colon : followed by the parameter name. For example, in the route pattern /api/users/:id, id is a route parameter.
You can access route parameters using req.params. It will return an object containing all the route parameters parsed from the URL.
Example:
```javascript
// Route: /api/users/:id
// URL: http://example.com/api/users/123
console.log(req.params.id); // Output: 123
```

## File handling
File handling in Node.js is accomplished using the built-in fs (file system) module, which provides an API for interacting with the file system. This includes reading, writing, and manipulating files and directories. Here's a detailed overview of file handling in Node.js:

Importing the fs Module:
First, you need to import the fs module to work with the file system:

```javascript
const fs = require('fs');
```

### Asynchronous vs. Synchronous File Operations:
#### Asynchronous: Asynchronous file operations in Node.js use callbacks or promises to handle completion. These methods are non-blocking and the recommended approach for file handling to maintain application performance.

#### Synchronous: Synchronous file operations block the execution until the operation completes. These methods are simpler to use but may negatively impact application performance, especially for large files or frequent file operations.

Common File Handling Methods:
Here are some common file handling methods provided by the fs module:

- Reading Files:
```javascript
fs.readFile(path, [options], callback): Reads the entire content of a file asynchronously.
fs.readFile('path/to/file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});
fs.readFileSync(path, [options]): Reads the entire content of a file synchronously.

try {
    const data = fs.readFileSync('path/to/file.txt', 'utf-8');
    console.log('File contents:', data);
} catch (err) {
    console.error('Error reading file:', err);
}
```
- Writing Files:
fs.writeFile(path, data, [options], callback): Writes data to a file asynchronously. If the file already exists, it is overwritten.
```javascript
fs.writeFile('path/to/file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
});
```

- Appending Files:
fs.appendFile(path, data, [options], callback): Appends data to a file asynchronously. If the file doesn't exist, it is created.
```javascript
fs.appendFile('path/to/file.txt', '\nAppended line', (err) => {
    if (err) {
        console.error('Error appending file:', err);
    } else {
        console.log('File appended successfully.');
    }
});
```

- Deleting Files:
fs.unlink(path, callback): Deletes a file asynchronously.
```javascript

fs.unlink('path/to/file.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});
```
