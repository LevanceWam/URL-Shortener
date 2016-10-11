const db = require('./db');


// Creating the recipe
exports.add = (data, err, success) => {
  db.recipe.create(data).then(success).catch(err);
  console.log('This recipe was created from the models');
};

// __________________________________________________________

// updating the recipe
exports.update = (data, err, success) => {
  db.recipe.find({
    where: {
      id: data.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(data).then(success).catch(err);
  }).catch(err);
  console.log('This recipe was updated from the models');
};

// ___________________________________________________________

// deleting the recipe
exports.remove = (data, err, success) => {
  db.recipe.destory({
    where: {
      id: data.id,
    },
  }).then(success).catch(err);
  console.log('This recipe was deleted from the models');
};

// ___________________________________________________________

// finding one of the recipes
exports.one = (data, err, success) => {
  db.recipe.find({
    where: {
      id: data.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  console.log('This one recipe was found from the models');
};

// redirect the url
exports.go = (data, err, success) => {
  db.recipe.
};

// ___________________________________________________________

// finding all of the recipes
exports.all = (err, success) => {
  db.recipe.findAll().then(success).catch(err);
  console.log('These recipes were found from the models');
};
