# 🚀 Express.js Complete Learning Repository

> A comprehensive Express.js learning repository covering everything from basic server creation to advanced backend concepts. This repository serves as both a revision guide and hands-on practice resource for building REST APIs and backend applications using Express.js.

---

# 📌 Overview

This repository contains various Express.js examples and exercises that demonstrate:

* Creating Express Servers
* Routing
* Route Parameters
* Query Strings
* Request & Response Objects
* Middleware
* REST APIs
* HTTP Methods
* Error Handling
* Express Architecture
* Backend Development Fundamentals

The goal of this repository is to learn Express.js from **Beginner → Intermediate → Advanced** level through practical examples.

---

# 🛠 Tech Stack

* Node.js
* Express.js
* JavaScript (ES6+)
* REST APIs

---

# 📂 Project Structure

```bash
Express/
│
├── app.js
├── package.json
├── routes/
├── middleware/
├── controllers/
├── public/
├── views/
└── README.md
```

---

# ⚡ Getting Started

## Clone Repository

```bash
git clone <repository-url>
```

## Navigate to Project

```bash
cd Express
```

## Install Dependencies

```bash
npm install
```

## Start Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

---

# 🌐 Creating an Express Server

```js
const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
```

### Explanation

* `express()` creates an Express application.
* `app.listen()` starts the server.
* Server listens for incoming requests on specified port.

---

# 🔄 Request-Response Cycle

Every Express application follows:

```text
Client Request
      ↓
Express Server
      ↓
Route Handler
      ↓
Response Sent
```

Example:

```js
app.get("/", (req, res) => {
    res.send("Hello Express");
});
```

---

# 🛣 Routing in Express

Routing determines how an application responds to a specific client request.

```js
app.get("/", (req, res) => {
    res.send("Home Page");
});
```

---

# 🎯 Route Parameters

Route Parameters allow dynamic URLs.

Example:

```js
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;

    let htmlStr =
        `<h1>Welcome to the page of ${username}</h1>`;

    res.send(htmlStr);
});
```

## URL Example

```text
http://localhost:8080/kamlakant/101
```

### Output

```html
Welcome to the page of kamlakant
```

---

# 🔍 Query Strings

Query parameters are used for searching and filtering data.

Example:

```js
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("No Result");
});
```

### URL

```text
http://localhost:8080/search?q=apple
```

### req.query

```js
{
    q: "apple"
}
```

---

# 📥 Sending Responses

## Plain Text

```js
res.send("Hello World");
```

## HTML Response

```js
res.send("<h1>Hello World</h1>");
```

## Dynamic HTML

```js
let username = "Kamlakant";

res.send(
    `<h1>Welcome ${username}</h1>`
);
```

---

# 📤 Request Object (req)

The Request Object contains information sent by client.

Common Properties:

```js
req.params
req.query
req.body
req.headers
req.method
req.url
```

Example:

```js
console.log(req.query);
console.log(req.params);
```

---

# 📨 Response Object (res)

Used to send data back to client.

Methods:

```js
res.send()
res.json()
res.render()
res.redirect()
res.status()
```

Example:

```js
res.send("Success");
```

---

# 🌍 Dynamic Routing

Instead of creating multiple routes:

❌ Bad

```js
app.get("/user1");
app.get("/user2");
app.get("/user3");
```

✅ Better

```js
app.get("/:username", (req, res) => {
    res.send(req.params.username);
});
```

---

# 🚦 HTTP Methods

## GET

Used to retrieve data.

```js
app.get("/", (req, res) => {
    res.send("GET Request");
});
```

---

## POST

Used to create data.

```js
app.post("/", (req, res) => {
    res.send("POST Request");
});
```

---

## PUT

Used to update data.

```js
app.put("/", (req, res) => {
    res.send("PUT Request");
});
```

---

## DELETE

Used to remove data.

```js
app.delete("/", (req, res) => {
    res.send("DELETE Request");
});
```

---

# ⚙ Middleware

Middleware functions execute before route handlers.

Example:

```js
app.use((req, res, next) => {
    console.log("Middleware Executed");
    next();
});
```

### Uses

* Authentication
* Logging
* Validation
* Error Handling

---

# 🚫 404 Handling

Catch all unmatched routes.

```js
app.get("*", (req, res) => {
    res.send("404 Page Not Found");
});
```

---

# 📊 Express Application Flow

```text
Request
   ↓
Middleware
   ↓
Route Matching
   ↓
Controller Logic
   ↓
Response
```

---

# 🎓 Concepts Covered

## Beginner

* Express Installation
* Creating Server
* Routing
* Request & Response
* Route Parameters
* Query Strings

## Intermediate

* Middleware
* REST APIs
* Dynamic Routes
* HTTP Methods
* Error Handling

## Advanced

* MVC Architecture
* Authentication
* Authorization
* JWT
* Database Integration
* File Upload
* Session Management
* Deployment

---

# 🧠 Important Interview Questions

### What is Express.js?

Express.js is a lightweight Node.js web framework used for building web applications and APIs.

---

### What is Middleware?

Functions that execute between request and response cycle.

---

### Difference Between req.params and req.query?

#### req.params

```text
/user/kamal
```

```js
req.params.username
```

---

#### req.query

```text
/search?q=apple
```

```js
req.query.q
```

---

### What is Routing?

Routing determines how the application responds to a specific URL request.

---

### What is REST API?

An API following REST principles using HTTP methods.

---

### What is app.use()?

Used to register middleware functions.

---

# 🚀 Future Improvements

* MongoDB Integration
* Mongoose Models
* JWT Authentication
* MVC Pattern
* RESTful APIs
* CRUD Operations
* File Uploads
* Cloudinary Integration
* Session Authentication
* Deployment on Render

---

# 📚 Learning Outcome

After completing this repository, you will understand:

✅ Express Server Setup

✅ Routing

✅ Request & Response Handling

✅ Dynamic URLs

✅ Query Parameters

✅ Middleware

✅ HTTP Methods

✅ REST APIs

✅ Backend Fundamentals

✅ Scalable Express Project Structure

---

# 👨‍💻 Author

**Kamlakant Kumar**

Aspiring Software Engineer | MERN Stack Developer | Java Enthusiast | DSA Practitioner

---

⭐ If you found this repository useful, consider giving it a star!
