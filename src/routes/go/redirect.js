const recipes = require('../../models/recipes');

module.exports = (express) => {
  const router = express.Router();

// The redirect
  router.get('shortURL', (req, res) => {
    req.body.shortURL = req.params.shortURL;
    recipes.go(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect(data.recipes);
    });
  });
  return router;
};
