const recipes = require('../../models/recipes');
const sURL = require('../../models/createURL');

module.exports = (express) => {
  const router = express.Router();

  // Create recipes
  router.post('/url', (req, res) => {
    // req.body.shortURL = recipes.originalLink(sURL);
    recipes.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// ___________________________________________________________


// Find one recipe
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    recipes.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// ___________________________________________________________


// Find All recipes
  router.get('/urls', (req, res) => {
    recipes.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// ___________________________________________________________


// Delete recipes
  router.delete('/url/:id', (req, res) => {
  req.body.id = req.params.id;
    recipes.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// ___________________________________________________________

// Update recipes
  router.post('/url/:id', (req, res) => {
  req.body.id = req.params.id;
    recipes.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


  return router;
};
