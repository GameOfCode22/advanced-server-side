// importrs the express module
const express = require("express");
const userRouter = require("./src/router/userRouter");
const dotenv = require("dotenv");
const path = require("path");

const ENV = process.env.NODE_ENV || "local"; // Set environment
dotenv.config({ path: path.resolve(__dirname, `.env.${ENV}`) }); // Load the appropriate .env file
const PORT = process.env.PORT; // Defines which port the server will listen on
console.log(`Running in ${ENV} mode`);




// Creates an Express application instance
const server = express();

// Middleware to track request and response time
function requestResponseTime(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method}  ${req.originalUrl} took ${duration} ms`);
  });

  next(); // Call next to move to the next middleware/route
}




server.use(requestResponseTime); // Use the middleware globally
server.use(express.json()); // Middleware to parse JSON bodies
server.use(userRouter);







// Starts the server and makes it listen for incoming requests
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
