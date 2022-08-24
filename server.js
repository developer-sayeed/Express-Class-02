const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const pagerouter = require("./routes/pagerouter.js");

//  Enviroment Varibale

dotenv.config();
const port = process.env.port || 4000;

//  Express init

const app = express();

// Data manage

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Express Folder Static

app.use(express.static("./public"));

// Routing

app.use(pagerouter);

// server Lidten

app.listen(port, (req, res) => {
  console.log(`server is runing port ${port}`.bgGreen.black);
});
