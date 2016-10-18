const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// setting the port to 3000
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// creating my route
app.use('/api/v1/', require('./routes/api/recipes')(express));
app.use('/go/', require('./routes/go/redirect')(express));

const server = app.listen(port, () => {
  console.log('Server active on', port);
});

module.exports = server;
