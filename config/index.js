import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

const app = express();

// ensures that env variables are loaded
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}


app.use(morgan("dev"));

app.get("/", (req, res) => {
  try {
    res.status(200);
    res.send("Hello World!");
  } catch (error) {
    res.status(500);
    res.send("A server error occurred while handling your request.");
  }
});

//seteup  GET request handler
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Hello World!",
    });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred",
    });
  }
});

//set server to listen on port defined in .env file
//app.listen(3000, () => console.log("Server listening on port 3000..."));

// exports env variables for use
export default {
  app,
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT),
};
