const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();

//dbconnect
dbConnect();
module.exports = app;