const express = require('express');
const body_parser = require('body-parser');
const app = express();

// setting the port to a 3000
const port = 3000;

// creating my routes
app.use('api/v1/url',require('./routes/foodUrl.js')(express));
app.use('api/v1/url',require('./routes/resturantUrl.js')(express));

const server = app.listen(port, () => {
  console.log('server active on', port)
});
