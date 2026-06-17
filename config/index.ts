import dotenv from 'dotenv';
import path from 'path';

const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Can't load .env!");
}

module.exports = {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT, 10),
  auth: {
    secret: process.env.SECRET,
  },
};
