// imports
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/post');

// express
const app = express();

// use
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
}

// routes
app.use('/api/post', postRoutes);

app.listen(8085);