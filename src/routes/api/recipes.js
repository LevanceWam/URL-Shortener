const recipes = require('../../models/recipes');


module.exports = (express) => {
  const router = express.Router();

  // Create recipes
  router.post('/url', (req, res) => {
    recipes.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


  return router;
};
