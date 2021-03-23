require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const router = require(path.join(__dirname,'routes','routeIndex.js'));

const app = express();

const PORT = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/fitnessTracker", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });