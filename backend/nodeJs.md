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
## express.static and express-fileupload

- express.static:
Purpose: express.static is a built-in middleware in Express.js that serves static files (such as images, CSS, JavaScript files, and other assets) directly from a specified directory.

Usage: The middleware takes the path to the directory where the static files are located as an argument and serves any files that match the requested URL.

```javascript
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```
In this example, the express.static middleware serves static files from the public directory. Any files in that directory (or its subdirectories) that match the requested URL will be served directly to the client.


- express-fileupload 

Purpose: express-fileupload is a third-party middleware in Express.js that enables file uploads. It simplifies handling file uploads from clients, including parsing form data and saving uploaded files.

Installation: You can install express-fileupload using npm:
Usage: You must configure the middleware in your Express app, and then you can handle file uploads in your routes.
Example:
```javascript

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// Enable file upload
app.use(fileUpload());

// Route to handle file uploads
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Access the uploaded file
    const uploadedFile = req.files.myFile;

    // Save the file to a specific path
    const savePath = __dirname + '/uploads/' + uploadedFile.name;
    uploadedFile.mv(savePath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```
In this example, express-fileupload is enabled using app.use(fileUpload()). In the /upload route, the uploaded file is accessed via req.files.myFile and saved to a specified directory using the mv method.

## Hashing passwords
it is a crucial part of building secure applications that handle user authentication. In Node.js, you can use the bcrypt library to hash passwords. Bcrypt is a popular library that provides a secure way to hash passwords and also supports salting, which helps to make the hashed passwords more secure against attacks like rainbow table and dictionary attacks.

Here's how you can hash passwords with bcrypt in Node.js:

Install the bcrypt library: First, you need to install the bcrypt library using npm:
```bash
npm install bcrypt
```
Import the bcrypt library: Once the library is installed, you can import it in your Node.js code:
```bash
const bcrypt = require('bcrypt');
```
Set the salt rounds: Bcrypt uses a salt to add an additional layer of security to the hashed password. The salt rounds determine the cost factor and the time it takes to hash the password. Typically, 10 to 12 rounds is considered secure:
```bash
const saltRounds = 10; // You can adjust this value based on your security requirements
Hash the password: You can use the bcrypt.hash() function to hash a plain text password. This function takes three parameters: the plain text password, the salt rounds, and a callback function that handles the hashed password:

const plainTextPassword = 'your_password_here';

bcrypt.hash(plainTextPassword, saltRounds, (err, hashedPassword) => {
    if (err) {
        console.error('Error hashing password:', err);
    } else {
        console.log('Hashed password:', hashedPassword);
    }
});
```
The hash function will asynchronously hash the plain text password and pass the hashed password to the callback function.
Verify the hashed password: When a user tries to log in, you need to verify their plain text password against the stored hashed password. You can use the bcrypt.compare() function for this purpose:
```bash
const hashedPassword = 'stored_hashed_password_here';

bcrypt.compare(plainTextPassword, hashedPassword, (err, result) => {
    if (err) {
        console.error('Error comparing passwords:', err);
    } else if (result) {
        console.log('Password match!');
    } else {
        console.log('Password does not match.');
    }
});
```
The compare function takes the plain text password and the hashed password as arguments and returns a boolean result indicating whether the passwords match.


## JWT with cookie

Using JWT with cookies in a Node.js application can help manage user authentication and sessions securely. Cookies are used to store the JWT on the client-side, and they are included automatically in HTTP requests, which can simplify the process of managing user sessions.

Here’s how you can use JWT with cookies in a Node.js application:

Install necessary packages: You will need jsonwebtoken for creating and verifying JWTs and cookie-parser to handle cookies in your application.
```bash
npm install jsonwebtoken cookie-parser
```
Set up Express and middleware: Import and set up Express and the necessary middleware (cookie-parser) for your application.
```bash
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
```
Generate a JWT: When a user logs in, you should generate a JWT and set it in a cookie. Be sure to set the cookie with the httpOnly flag to make it inaccessible from client-side JavaScript. This improves security by preventing client-side scripts from accessing the cookie.
```bash
const secretKey = 'your_secret_key';

app.post('/login', (req, res) => {
    const payload = {
        userId: req.body.userId,
        username: req.body.username,
    };

    const options = {
        expiresIn: '1h', // Set the token expiration time
    };

    // Create a JWT
    const token = jwt.sign(payload, secretKey, options);

    // Set the JWT in a cookie
    res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Prevent cross-site requests
    });

    res.send('Login successful');
});
```
## httpOnly: true

- Purpose: When the httpOnly attribute is set to true on a cookie, it means that the cookie can only be accessed by the server and not by client-side scripts such as JavaScript.
- Security: This attribute is used to enhance security by preventing client-side scripts (such as JavaScript) from accessing the cookie's value. This can help mitigate certain types of attacks such as cross-site scripting (XSS).
- Usage: Cookies with the httpOnly attribute set are still sent with HTTP requests, such as when the browser makes a request to the server, but they cannot be manipulated or read by JavaScript running in the user's browser.

## sameSite: 'strict':

- Purpose: The sameSite attribute is used to control whether a cookie should be sent along with cross-site requests. When set to 'strict', the cookie is only sent with requests to the same site (i.e., same origin) as the cookie itself.
- Security: This attribute helps enhance security by preventing the cookie from being sent in cross-site requests, which can help mitigate cross-site request forgery (CSRF) attacks. It ensures that the cookie is only sent when the user navigates within the same site.
- Usage: When sameSite is set to 'strict', the cookie will not be sent with requests initiated by third-party websites. This means the cookie is not sent with requests from different origins, ensuring that the cookie is used only in the context of the site where it was set.

Verify the JWT: When a user makes an authenticated request, verify the JWT from the cookie before allowing them access to protected routes.
```bash
app.get('/protected', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send('Access denied');
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }

        // Token is valid; proceed with your logic
        res.send('Welcome to the protected route');
    });
});
```
Handling token expiration: JWTs have an expiration time set when they're created. When the token expires, you may need to handle the situation by asking the user to log in again and issuing a new token.
Logout: To allow users to log out, you can clear the JWT cookie:
```javascript
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.send('Logged out successfully');
});
```

## SMTP and HTTP

### SMTP (Simple Mail Transfer Protocol):

- Purpose: SMTP is a protocol used for sending and transmitting emails over the internet. It is primarily responsible for the delivery of emails from the sender's email client to the recipient's email server.
- How It Works: When you send an email, your email client uses SMTP to send the email to the recipient's mail server. The recipient's mail server then delivers the email to the recipient's inbox. SMTP works at the application layer and follows a set of rules for sending and receiving emails.
- Communication: SMTP typically uses port 25 for unencrypted communication and port 587 for encrypted communication.

### HTTP (Hypertext Transfer Protocol):

- Purpose: HTTP is a protocol used for transmitting hypertext, such as web pages and other resources, over the internet. It is the foundation of data communication for the World Wide Web.
- How It Works: HTTP is a request-response protocol. When you visit a website, your web browser sends an HTTP request to the web server hosting the website. The server responds with the requested data, which the browser then interprets and displays as a web page.
- Communication: HTTP typically uses port 80 for unencrypted communication and port 443 for encrypted communication 

### MIME (Multipurpose Internet Mail Extensions):

- Purpose: MIME is a standard that specifies how emails and their attachments are formatted. It extends the format of emails to support different types of data, such as text in different character sets, images, audio, video, and other file types.
- Function: MIME is used to encode and decode email messages and attachments. It allows emails to include various media types and attachments while maintaining the integrity and readability of the email content across different email clients and servers.
