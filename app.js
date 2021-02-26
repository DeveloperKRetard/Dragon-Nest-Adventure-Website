const express = require("express");
const app = express();
const path = require('path');
const dotenv = require('dotenv').config({path: "./.env"});

app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);

app.set("view engine", "html");

app.use("/", require("./routes/register"));

app.use(express.static(__dirname + '/public'));

app.listen("8080", () => console.log("Listening on port 8080"));
