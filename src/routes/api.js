// setting my constant to the createURL.js
const generateLink = require('../createURL');

module.exports = (express) => {
  const router = express.Router();
  router.post('/url', (req, res) => {
    // the shorten url will come from a provided link
    res.json(generateLink.shortURL(req.body.link));
  });
  return router;
};
