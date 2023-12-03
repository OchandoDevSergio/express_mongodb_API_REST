const express = require("express");

const app = express();

//Express config
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Funcionamiento correcto');
})



module.exports = app;