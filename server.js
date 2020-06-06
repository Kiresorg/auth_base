const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// middleware for parsing requests
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json);

// dB config
const db = require("./config/keys").mongoURI;
//const db = "mongodb+srv://egross:Z^V^Zd3v@auth-base-jif7w.mongodb.net/auth-base?retryWrites=true&w=majority";

// connect to dB
mongoose
    .connect(
        db,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() =>
        console.log("Connected to MongoDB"))
    .catch(error => console.log(error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server up and listening on port ${PORT} `));