const generateLink = require('../createURL');
module.exports = (express) => {
  const router = express.Router();
  router.post('/url', (req, res) => {
    res.json(generateLink.shortURL(req.body.link));
  });
  return router;
};
