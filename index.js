import express, { request } from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as Controller from "./controllers.js";

await mongoose
  .connect("mongodb+srv://Hadar:12345@maindb.tjaawul.mongodb.net/hadar")
  .then(() => console.log("DB coneccted"))
  .catch((err) => console.log("DB error", err));

const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,append,delete,entries,foreach,get,has,keys,set,values,Authorization,X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.post("/home", Controller.createSwitcher);

const PORT = process.env.PORT || 4444;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server start on port: ${PORT}`);
});