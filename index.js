const express = require("express");
const app = express();

const path = require("path");
const mongoose = require("mongoose");
const db = require("./db/db_connection");
const models = require("./model/datamodel");
const router = express.Router();
var bodyParser = require('body-parser')

const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.set("views", path.join(__dirname, "public"));
app.use("/user", require("./routes/user"));
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
