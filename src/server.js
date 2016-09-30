const express = require('express');
const body_parser = require('body-parser');
const app = express();

// setting the port to 3000
const port = 3000;

// creating my routes
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.use('/api/v1', require('./routes/api')(express));

const server = app.listen(port);
