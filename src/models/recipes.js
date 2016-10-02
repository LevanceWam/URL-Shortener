const db = require('./db');
// ________________________________

// Creating the recipe
exports.add = (data, err, success) => {
  db.recipe.create(data).then(success).catch(err);
};
