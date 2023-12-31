const express = require("express");

const app = express();

//Express config
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes'));



module.exports = app;