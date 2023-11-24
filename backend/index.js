//packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utils
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser);

app.get("/", (req, res) => {
  res.send("hello world");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    // Await the completion of the connection before starting the server
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
