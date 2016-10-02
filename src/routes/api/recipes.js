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

// ___________________________________________________________


// Find one recipe
router.post('/url', (req, res) => {
  recipes.add(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  });
});

// ___________________________________________________________


// Find All recipes
router.post('/url', (req, res) => {
  recipes.add(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  });
});

// ___________________________________________________________


// Delete recipes
router.post('/url', (req, res) => {
  recipes.add(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  });
});

// ___________________________________________________________

// Update recipes
router.post('/url', (req, res) => {
  recipes.add(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  });
});

// ___________________________________________________________

// Create recipes
router.post('/url', (req, res) => {
  recipes.add(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  });
});

// ___________________________________________________________

  return router;
};
