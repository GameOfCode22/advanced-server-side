const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const path = require("path");
const { log } = require("console");

// Set environment
const ENV = process.env.NODE_ENV || "local";

// Load the appropriate .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env." + ENV) });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
