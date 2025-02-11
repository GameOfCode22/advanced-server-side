// importrs the express module
const express = require("express");
const userRouter = require("./src/router/userRouter");

// Creates an Express application instance
const server = express();
// Defines which port the server will listen on
const PORT = 4000;

// Middleware to parse JSON bodies
server.use(express.json());

server.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date()}`);
  next();
});

server.use(userRouter);

// Starts the server and makes it listen for incoming requests
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
